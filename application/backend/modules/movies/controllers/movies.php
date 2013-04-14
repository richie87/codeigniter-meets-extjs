<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
   * Movies
   *
   *
   * @package    CodeIgniter meets ExtJS
   * @subpackage Movies
   * @author     Richard Jäger <richiejaeger@gmail.com>
   */

class Movies extends MY_Controller {

	function __construct() {
        parent::__construct();
        $this->load->model('Movies_model');
    }

	/**
	*
	* CREATE an item
	*
	* @return json encoded array (boolean)
	*/

	public function create() {
	    $items = json_decode($this->input->post('items'));
        $item_data = array(
            'title' => $items->title,
        	'year' => $items->year,
            'runtime' => $items->runtime,
            'description' => $items->description,
        );

	    $insert = $this->Movies_model->insert_entry($item_data);
	    if (intval($insert)) {
	        $item_data['id'] = $insert;
	        $data['success'] = true;
	        $data['total'] = 1;
	        $data['items'] = $item_data;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Fehler';
	        $data['message'] = 'Es besteht ein Problem mit der Datenbank.';
	    }

		echo json_encode($data);
	}

	/**
	*
	* READ/RETRIEVE items
	*
	* @return json encoded array (items)
	*/

	public function read() {
	    $limit = $this->input->get('limit', TRUE) > '' ? $this->input->get('limit', TRUE) : 45;
	    $offset = $this->input->get('start', TRUE);

	    $sorts = json_decode($this->input->get('sort', TRUE));
	    if ($sorts) {
		    foreach ($sorts as $sort) {
		        $orders[] = $sort->property.' '.$sort->direction;
		    }
		    $order_by = implode(', ', $orders);
	    } else {
	    	$order_by = 'id asc';
	    }

	    $total_entries = $this->Movies_model->count_all_entries($filter = array());
	    $entries = $this->Movies_model->get_all_entries($filter = array(), $limit, $offset, $order_by);

	    $data['success'] = true;
	    $data['total'] = $total_entries;
	    $data['items'] = $entries;

	    extjs_output($data);
	}

	/**
	*
	* UPDATE an item
	*
	* @return json encoded array (boolean)
	*/

	public function update() {
		$items = json_decode($this->input->post('items'));

		$filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

        $item_data = array(
            'title' => $items->title,
        	'year' => $items->year,
            'runtime' => $items->runtime,
            'description' => $items->description,
        );

	    $insert = $this->Movies_model->update_entry($filter, $item_data);
	    if (intval($insert)) {
	        $data['success'] = true;
	        $data['total'] = 1;
	        $data['items'] = $item_data;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Fehler';
	        $data['message'] = 'Es besteht ein Problem mit der Datenbank.';
	    }

		echo json_encode($data);
	}

	/**
	*
	* DESTROY/DELETE an item
	*
	* @return json encoded array (boolean)
	*/

	public function destroy() {
	    $items = json_decode($this->input->post('items'));

        $filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

	    if ($this->Movies_model->delete_enry($filter)) {
	        $data['success'] = true;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Fehler';
	        $data['message'] = 'Es besteht ein Problem mit der Datenbank.';
	    }

	    extjs_output($data, 'html');
	}

}