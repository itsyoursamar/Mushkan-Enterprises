export default function Cards({ item }) {
  return (
      <div className="card card-compact bg-base-100 shadow-xl w-72 h-72 transition-transform duration-300 ease-in-out hover:scale-105">
          <figure className="w-full h-full">
              <img className="w-full h-full object-cover" src={item.img} alt="design" />
          </figure>
        
      </div>
  );
}
