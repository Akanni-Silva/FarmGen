
function Home() {
  return (
    <>
      <div className="bg-fuchsia-600 flex justify-center ">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 font-serif">
            <h2 className="text-5xl font-bold">FarmGen!</h2>
            <p className="text-xl text-center">
              Se até seu deploy precisa de saúde,
              <br /> imagina você.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.postimg.cc/qqVR9LNS/90f23390bef5416b535346c561ab8ca61d81b67b.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
