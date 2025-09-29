// app/page.tsx
export default function Home() {
  return (
    <section id="aboutme" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQERbJWr40xZOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688164685599?e=2147483647&v=beta&t=o9Q_UMusLYLTrFspJuE-dX9yJXIiGdACKMozuoFpLrs"
            className="rounded-circle img-fluid border border-3 border-primary"
            alt="Diego Romero"
          />
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">Hi, I'm Diego!</h1>
          <p>
            I am a technology professional with over 20 years of global
            experience in IT, telecommunications, software development, customer
            service, and connectivity. I combine technical expertise with
            strategic vision to deliver impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

