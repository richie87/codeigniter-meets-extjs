<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

	public function __construct() {
        parent::__construct();
		
		//requires login
		try {
			if (is_object(json_decode(get_cookie(APP_NAME.'_access')))) {
				$this->load->model('Users_model');
				$user_cookie = json_decode(get_cookie(APP_NAME.'_access'));
				$user_check = $this->Users_model->check_login($user_cookie->user, $user_cookie->pass, '', false);
				if ($user_check) {
					$this->session->set_userdata(array(APP_NAME.'_access' => true));
				} else {
					$this->_denyUser();
				}
			} else {
				$this->_denyUser();
			}
		} catch (Exception $e) {
			$data['success'] = false;
			$data['code'] = $e->getCode();
			$data['message'] = $e->getMessage();
			extjs_output($data);
		}
    }
	
	private function _denyUser() {
		if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
			throw new Exception('Session expired, you will be redirected.', 401);
		} else {
			redirect('/auth', 'refresh');
		}
	}
}