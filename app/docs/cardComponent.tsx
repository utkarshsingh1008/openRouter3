import { Card } from "@nextui-org/card";

function CardComponent() {
  return (
    <div>
        <div className="mt-8 ">
	  <div className="flex justify-between">   <div className="flex lg:gap-2">
	 <button className="bg-white hover:bg-gray-200 text-gray-600 font-semibold  px-1 border border-gray-400 rounded shadow">
  typescript
</button>
<button className="bg-white hover:bg-gray-200 text-gray-600 font-semibold py000 px-1 border border-gray-400 rounded shadow">
  python
</button>
<button className="bg-white hover:bg-gray-200 text-gray-600 font-semibold  px-1 border border-gray-400 rounded shadow">
  shell
</button>  </div>
<div>
<button className="bg-white hover:bg-gray-200 text-gray-600 font-semibold  px-1 border border-gray-400 rounded shadow">
copy
</button>
	</div>
		 </div>
		 <Card
  isFooterBlurred
  radius="lg"
  className="border-none"
>
  <p className="p-4 text-black lg:w-96 lg:mx-10 ">"akjsc kasjc k scb k cskj c qa wkdjcbnwklcnwlcjnwecwlefnwjefcliwnjfowifow "</p>

</Card>

	  </div>
    </div>
  )
}

export default CardComponent
