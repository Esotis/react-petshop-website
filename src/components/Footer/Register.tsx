function Register() {
  return (
    <div className=" flex flex-col gap-3 rounded-[20px] bg-dark-blue p-4 lg:flex-row lg:items-center">
      <h2 className=" text-[20px] font-bold text-white lg:max-w-[330px]">
        Register Now So You Don't Miss Our Programs
      </h2>
      <div className=" flex flex-1 flex-col gap-2 rounded-[14px] bg-white p-4 lg:flex-row">
        <input
          type="text"
          className=" rounded-lg border-2 border-neutral-40 px-[28px] py-[14px] text-[14px] font-semibold text-neutral-40 focus:outline-none lg:flex-1"
          placeholder="Enter your Email"
        />
        <button className=" rounded-lg bg-dark-blue px-[28px] py-[14px] font-semibold text-white">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Register;
