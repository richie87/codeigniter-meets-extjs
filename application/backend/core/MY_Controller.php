<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

	public function __construct() {
        parent::__construct();
		
		//requires login
		if (is_object(json_decode(get_cookie(APP_NAME.'_access')))) {
			$this->load->model('Users_model');
			$user_cookie = json_decode(get_cookie(APP_NAME.'_access'));
			$user_check = $this->Users_model->check_login($user_cookie->user, $user_cookie->pass, '', false);
			if ($user_check) {
				$this->session->set_userdata(array(APP_NAME.'_access' => true));
			} else {
				redirect('/auth', 'refresh');
			}
		} else {
			redirect('/auth', 'refresh');
		}
    }
}