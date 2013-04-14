<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Users_model extends CI_Model {
	
	private $table;
	private $table_fields;

    function __construct() {
        parent::__construct();
		
		$this->table = 'users';
		
		$this->table_fields = array(
			$this->table.'.id',
			$this->table.'.username',
			$this->table.'.password'
		);
    }
    
    function check_login($username, $password, $decode_pass = true) {
		$password = $decode_pass ? sha1($password) : $password;
		$users_db_search_data = array(
			'users.username' => $username,
			'users.password' => $password,
		);
		
        $this->db->select('users.id'); 
        $this->db->where($users_db_search_data); 
		$this->db->from('users');
		
		$users_db_query = $this->db->get();
		
		if ($users_db_query->num_rows == 1) {
			return $users_db_query->row('id');
		} else {
			return false;
		}
    }
	
	function userdata_by_id($id) {
		$users_db_search_data = array(
			'users.id' => $id,
		);
		
		$this->db->where($users_db_search_data); 
		$this->db->from('users');
		$users_db_query = $this->db->get();
		
		if ($users_db_query->num_rows == 1) {
			return $users_db_query;
		} else {
			return false;
		}
	}
	
}