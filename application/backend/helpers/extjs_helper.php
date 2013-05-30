<?php
function extjs_output($data = array(), $content_type = 'json') {
	if ($content_type == 'html') {
		header('Content-Type: text/html; charset=utf-8');
	} else {
		header('Content-type: application/json');
	}
	echo json_encode($data);
	exit;
}