import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fallback: Attempt to open the user's default email client
    const sendViaMailTo = () => {
      const subjectMap: Record<string, string> = {
        partnership: 'Partnership & Collaboration',
        research: 'Research & Projects',
        media: 'Media & Press',
        careers: 'Careers & Volunteering',
        general: 'General Inquiry',
      };
      
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'N/A'}\n\nMessage:\n${formData.message}`;
      const subject = `Paramarsh Inquiry: ${subjectMap[formData.subject] || 'Website Inquiry'}`;
      
      window.location.href = `mailto:queries@paramarsh.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setIsSubmitting(false);
      setSubmitted(true);
    };

    try {
      // Background submit using formsubmit.co 
      // NOTE: Formsubmit will send an "Activation" email to the address on the very first time it's used.
      const response = await fetch("https://formsubmit.co/ajax/queries@paramarsh.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization || "N/A",
          topic: formData.subject,
          _subject: `New Paramarsh Inquiry from ${formData.name}`,
          message: formData.message,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        sendViaMailTo();
      }
    } catch (error) {
      console.error("Submission error:", error);
      sendViaMailTo();
    }
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Headquarters',
      value: 'Varanasi, Uttar Pradesh',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'queries@paramarsh.dev',
    },
  ];



  return (
    <section id="contact" className="w-full bg-[#f4f7f8] py-24 relative overflow-hidden min-h-[100svh] flex flex-col justify-center">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">

          <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-subDark uppercase tracking-tight mb-5">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 font-sans max-w-2xl leading-relaxed">
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Info Card ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-paramarsh-subDark text-white rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-display font-semibold uppercase tracking-wide mb-8">
                Contact Information
              </h3>

              <div className="flex flex-col gap-7">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-paramarsh-green group-hover:bg-paramarsh-green group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-base font-sans leading-snug whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 bg-white rounded-xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-paramarsh-lightGreen flex items-center justify-center mb-2">
                  <Send className="w-7 h-7 text-paramarsh-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-paramarsh-dark">
                  Message Sent!
                </h3>
                <p className="text-gray-500 font-sans max-w-sm">
                  Thank you for reaching out, our team will get back to you shortly
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', organization: '', subject: '', message: '' }); }}
                  className="mt-4 text-sm text-paramarsh-green font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-semibold uppercase tracking-wide text-paramarsh-dark mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Full Name <span className="text-paramarsh-green">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Email Address <span className="text-paramarsh-green">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-org" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Organization / Company
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization (optional)"
                      className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors"
                    />
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Subject <span className="text-paramarsh-green">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a topic…</option>
                      <option value="partnership">Partnership &amp; Collaboration</option>
                      <option value="research">Research &amp; Projects</option>
                      <option value="media">Media &amp; Press</option>
                      <option value="careers">Careers &amp; Volunteering</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Row 4 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Message <span className="text-paramarsh-green">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help or collaborate…"
                      className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group self-start inline-flex items-center gap-2 bg-paramarsh-green text-white font-medium text-sm px-8 py-3.5 rounded hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-paramarsh-green/30 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
