export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>

        <div className="row g-4">

          {/* Project 1: WordPress Radio */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Online Radio & Content Portal</h5>
                <p className="card-text">
                  A complete WordPress-based platform simulating an online radio station and interactive community hub.
                </p>
                <h6>Main Features:</h6>
                <ul className="small text-muted">
                  <li>🎵 Live audio streaming with an intuitive player.</li>
                  <li>💬 Real-time chat for user interaction.</li>
                  <li>📰 Blog for news, articles, and events.</li>
                  <li>📩 Newsletter subscription form + WhatsApp button.</li>
                  <li>⚙️ Managed entirely via WordPress CMS for easy scalability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project 2: Oracle APEX CRM */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Customer Relationship Management (CRM)</h5>
                <p className="card-text">
                  A fully functional CRM built on Oracle APEX to optimize and centralize customer relationship management.
                </p>
                <h6>Main Features:</h6>
                <ul className="small text-muted">
                  <li>👥 Comprehensive client registration and management.</li>
                  <li>📊 Opportunity tracking from first contact to closing.</li>
                  <li>📞 Complete interaction history (calls, emails, meetings).</li>
                  <li>🔒 Secure and efficient Oracle Database integration.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project 3: .NET + Blazor Proof of Concept */}
          <div className="col-md-12">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Software Architecture Proof of Concept</h5>
                <p className="card-text">
                  A technical proof of concept (PoC) to demonstrate the application of Clean Architecture principles using .NET and Blazor.
                </p>
                <h6>Main Features:</h6>
                <ul className="small text-muted">
                  <li>⚙️ Developed with .NET, Blazor for UI, and MS SQL Server for data management.</li>
                  <li>🏛️ Clean Architecture ensuring modular, testable, and maintainable code.</li>
                  <li>📚 Designed as a knowledge base and program repository for the DNP development area.</li>
                  <li>🌐 Integration of external resources (MinTic CDN) to meet real project requirements.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
