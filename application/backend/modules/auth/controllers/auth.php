<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function index() {
		$this->load->view('login');
	}
	
	public function login() {
		$this->load->model('Users_model');
		$user_check = $this->Users_model->check_login($this->input->post('username'), $this->input->post('password'));
		if(intval($user_check)) {
			$user_data = $this->Users_model->userdata_by_id($user_check);
			$cookie = array(
				'name'   => APP_NAME.'_access',
				'value'  => json_encode(array('id' => $user_data->row('id'), 'user' => $user_data->row('username'), 'pass' => $user_data->row('password'))),
				'expire' => time()+86500
			);
			set_cookie($cookie);
			$this->session->set_userdata(array(APP_NAME.'_access' => true));
			$data['success'] = true;
		} else {
			$data['success'] = false;
		}
		
		extjs_output($data);
	}
	
	public function logout() {
		$this->session->unset_userdata(APP_NAME.'_access');
		delete_cookie(APP_NAME.'_access');
		redirect('/auth', 'refresh');
	}
}