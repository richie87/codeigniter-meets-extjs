<?php

function generate_filter($filter = array()) {
    $clause = array();
    foreach($filter as $where) {
        if($where['field'] > '' && $where['value'] > '') {
            if($where['operator'] == '=') {
                $clause[] = '`' . $where['field'] . '`' . ' ' . $where['operator'] . ' ' . '"' . $where['value'] . '"';
            }

            if($where['operator'] == 'LIKE') {
                $clause[] = '`' . $where['field'] . '`' . ' ' . $where['operator'] . ' ' . '"' . '%' . $where['value'] . '%' . '"';
            }
        }
    }

    $ci =& get_instance();

    return !empty($clause) ? $ci->db->where(implode(' AND ', $clause)) : '';
}