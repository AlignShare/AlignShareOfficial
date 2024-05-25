"use client";

export default function Main() {
  return (
    <section className="text-black body-font lg:pt-20">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h2 className="mb-8 text-4xl font-bold tracking-tighter text-white lg:text-6xl md:text-5xl animate-jump-in animate-once animate-delay-800 animate-ease-linear animate-fill-both">
            <span>Effortless communication</span>
            <br className="hidden lg:block"></br>
          </h2>
          <br></br>
          <div className="flex justify-center items-center animate-bounce animate-thrice animate-ease-in-out animate-normal animate-delay-1000">
            <div className="pt-4">
              <p className="text-lg mb-4 text-white mr-4 ">Need help?</p>
            </div>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 10px",
                border: "2px solid black",
                fontSize: "12px",
                fontWeight: "bold",
                borderRadius: "10px",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "#steps";
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "grey";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
              }}
            >
              Click here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
