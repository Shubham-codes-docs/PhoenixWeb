<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Home extends CI_Controller {
	public function index()
	{
		$this->load->view('header');
		$this->load->view('homepage');
		$this->load->view('footer');
	}
	public function teams()
	{
		$this->load->view('header');
		$this->load->view('teams');
		$this->load->view('footer');
	}
	public function gallery()
	{
		$this->load->view('header');
		$this->load->view('gallery');
		$this->load->view('footer');
	}
	public function sponsor()
	{
		$this->load->view('header');
		$this->load->view('sponsor');
		$this->load->view('footer');
	}
	public function achieve()
	{
		$this->load->view('header');
		$this->load->view('achieve');
		$this->load->view('footer');
	}
	public function sendEmail()
	{
		$name = $this->input->post('name');
		$from = $this->input->post('email');
		$subject = $this->input->post('subject');
		$message = $this->input->post('message');
		$to = to_email;
		$config['protocol'] = 'smtp';
		$config['smtp_host'] = 'ssl://smtp.googlemail.com';
		$config['smtp_port'] = '465';
		$config['smtp_user'] = smtp_user;
		$config['smtp_pass'] = smtp_pass;
		$config['mailtype'] = 'html';
		$config['charset'] = 'iso-8859-1';
		$config['wordwrap'] = TRUE;
		$config['validation'] = TRUE;
		$this->email->initialize($config);
		$this->email->from($from);
		$this->email->to($to);	
		$this->email->subject($subject);
		$this->email->message($message);
		$this->email->set_newline("\r\n");  
		$config['mailtype'] = 'html';
		$this->email->send();
		$this->session->set_flashdata("msg","Mail has been sent successfully , kindly check in your spam folder");
		$this->session->set_flashdata('msg_class','alert-success');
		return redirect('home');
	}
}
