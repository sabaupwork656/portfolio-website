import ContactSection from '../components/ContactSection';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

export default function ContactPage() {
  return (
    <main>
      <section className="hero-mesh py-16">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s talk about the product, workflow, or Rails app you want to improve."
            text="Use the links or placeholder form UI to shape the conversation around scope, timeline, existing code, and the first useful release."
          />
        </Container>
      </section>
      <ContactSection />
    </main>
  );
}
