import { Button } from "@mantine/core";

const Navbar = () => {
  return (
    <div className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img
            src="./img/gatitos2.jpg"
            alt=""
            className="h-20 w-20"
          />
        </div>
        <div className="flex">
          <nav>
            <ul className="flex gap-4">
              <li>inicio</li>
              <li>nosotros</li>
              <li>Mascotas</li>
              <li>ubicación</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <Button>Login</Button>
          <Button>Sing-out</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
