'use client';
import {Pagination} from "@nextui-org/react";
function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className='text-2xl font-semibold my-2'>Your Activity</h1>
        <p>See how you've been using models on OpenRouter. Privacy </p>

        <table className='my-10 w-full mr-48 border-collapse'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='w-auto p-6 border border-gray-300'>Timestamp</th>
              <th className='w-auto p-6 border border-gray-300'>Action</th>
              <th className='w-auto p-6 border border-gray-300'>Model</th>
              <th className='w-auto p-6 border border-gray-300'>Details</th>
              <th className='w-auto p-6 border border-gray-300'>Details</th>
              <th className='w-auto p-6 border border-gray-300'>Details</th>
              <th className='w-auto p-6 border border-gray-300'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white hover:bg-gray-100'>
              <td className='w-auto p-3 border border-gray-300'>Sample Timestamp</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Action</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Model</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
            </tr>
            <tr className='bg-gray-50 hover:bg-gray-100'>
              <td className='w-auto p-3 border border-gray-300'>Sample Timestamp</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Action</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Model</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
              <td className='w-auto p-3 border border-gray-300'>Sample Details</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <Pagination className="my-5 text-center" isCompact showControls total={1} initialPage={1} />
    </section>
  );
}

export default Page;
