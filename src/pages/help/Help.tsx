import { CiSearch } from "react-icons/ci";
import FAQ from '../../components/faqs/Faqs';

const Help = () => {
    return (
        <div className='pt-[83.5px] font-lato'>
          <div className='flex flex-col items-center justify-center py-16 gap-9'>
            <span className='text-blue-600'>FAQs</span>
            <h1 className='text-5xl'>Help</h1>
            <h4 className='text-[#475467]'>Have questions? We’re here to help.</h4>
            <div className='flex items-center border-2 border-[#D0D5DD] rounded h-10 w-60'>
            <CiSearch className='text-3xl' />
            <input type="text" className='w-full h-full rounded border-none'
            placeholder='Search'
            />
            </div>
          </div>
         <FAQ/>
          <div className="py-20 text-center bg-white space-y-8">
            <p className="font-bold">Still have questions?</p>
            <p className='text-[#475467]'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button className="bg-[#007EAF] text-white py-2 px-4 rounded">Get in touch</button>
          </div>
          </div>
      )
}

export default Help
