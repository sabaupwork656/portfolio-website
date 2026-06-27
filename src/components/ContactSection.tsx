import { FormEvent, useState } from 'react';
import { Github, Mail, Send } from 'lucide-react';
import { profile } from '../data/profile';
import Container from './Container';
import SectionHeader from './SectionHeader';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setStatus('error');
      setStatusMessage('Web3Forms key missing. Paste your real key in .env, then restart the dev server.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', accessKey);
    formData.append('from_name', String(formData.get('name') || 'Portfolio contact form'));
    formData.append('subject', String(formData.get('subject') || 'New portfolio contact message'));

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Message could not be sent.');
      }

      form.reset();
      setStatus('success');
      setStatusMessage('Message sent successfully. I will get back to you soon.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Message could not be sent. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="hero-mesh glass-strong grid gap-10 rounded-3xl p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Have a SaaS, dashboard, or Rails project in mind?"
              text="Tell me what you want to build, improve, or untangle. Send the form or use the direct links to start a conversation."
            />
            <div className="mt-8 grid gap-3">
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <Mail size={18} /> {profile.email}
              </a>
              <a className="contact-link" href={profile.upwork} target="_blank" rel="noreferrer">
                <Send size={18} /> Upwork profile
              </a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub profile
              </a>
            </div>
          </div>
          <form className="glass rounded-2xl p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="form-label">
                Name
                <input className="form-input" name="name" placeholder="Your name" required />
              </label>
              <label className="form-label">
                Email
                <input className="form-input" name="email" type="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label className="form-label mt-4">
              Subject
              <input className="form-input" name="subject" placeholder="Website redesign, SaaS MVP, CRM dashboard..." required />
            </label>
            <label className="form-label mt-4">
              Project type
              <select className="form-input" name="project_type">
                <option>SaaS MVP</option>
                <option>CRM or internal tool</option>
                <option>Dashboard or admin panel</option>
                <option>Rails bug fixes</option>
                <option>API integration</option>
              </select>
            </label>
            <label className="form-label mt-4">
              Message
              <textarea
                className="form-input min-h-32 resize-y"
                name="message"
                placeholder="A few details about the product, workflow, deadline, or existing codebase."
                required
              />
            </label>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
              <p className="text-xs leading-5 text-slate-400">Add your Web3Forms key in .env to receive messages by email.</p>
            </div>
            {statusMessage && (
              <p className={`mt-4 rounded-xl border p-3 text-sm ${status === 'success' ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300' : 'border-red-400/20 bg-red-400/10 text-red-300'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
