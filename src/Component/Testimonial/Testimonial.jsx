import Container from "../Container/Container";
import User1 from "../../assets/user1.png"
const Testimonial = () => {
    return (
        <div className="bg-[#12141dfa] pt-10 md:pt-[88px] pb-10 md:pb-28 px-2 lg:px-0">
            <Container>
                <div className="">
                    <div className="text-center pb-8 md:pb-14 space-y-5">
                        <h2 className="outfit_font text-[24px] md:text-[42px] font-semibold text-[#FFFFFF]">What our customers say</h2>
                        <p className="inter-font text-base md:text-lg font-normal text-[#B7B8BB] md:max-w-lg mx-auto">Read why thousands of marketers, writers, and entrepreneurs love us so much.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Darrell Steward</h3>
                                        <p className="text-sm font-normal">@darrels</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
                            <a href="" className="text-[#0EA5E9]">#another</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Leslie Alexander</h3>
                                        <p className="text-sm font-normal">@lesslie</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.</p>
                            <a href="" className="text-[#0EA5E9]">#postcrafts</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Jenny Wilson</h3>
                                        <p className="text-sm font-normal">@jennywilson</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>This is a top quality product. No need to think twice before making it live on web.</p>
                            <a href="" className="text-[#0EA5E9]">#make_it_fast</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Kristin Watson</h3>
                                        <p className="text-sm font-normal">@kristinwatson2</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.</p>
                            <a href="" className="text-[#0EA5E9]">#postcrafts</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Marvin McKinney</h3>
                                        <p className="text-sm font-normal">@jennywilson</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.</p>
                            <a href="" className="text-[#0EA5E9]">#dev #tools</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Annette Black</h3>
                                        <p className="text-sm font-normal">@jennywilson</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
                            <a href="" className="text-[#0EA5E9]">#another</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Floyd Miles</h3>
                                        <p className="text-sm font-normal">@jennywilson</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
                            <a href="" className="text-[#0EA5E9]">#postcrafts</a>
                        </div>
                        <div className="bg-[#FFFFFF] py-6 px-5 rounded-md">
                            <div className="flex justify-between pb-5">
                                <div className="flex items-center gap-3">
                                    <img src={User1} className="w-11 h-11 rounded-full" alt="" />
                                    <div className="">
                                        <h3 className="text-base font-semibold">Guy Hawkins</h3>
                                        <p className="text-sm font-normal">@jennywilson</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5299 1.64343C16.8725 1.93559 16.1786 2.1182 15.4482 2.22776C16.1786 1.78951 16.763 1.09562 17.0186 0.255644C16.3247 0.657371 15.5578 0.949536 14.7178 1.13214C14.0604 0.438247 13.1109 0 12.0883 0C10.1162 0 8.5093 1.60691 8.5093 3.57902C8.5093 3.87118 8.54582 4.12683 8.61887 4.38247C5.6607 4.23639 2.99469 2.81209 1.20518 0.620851C0.913015 1.16866 0.730412 1.75299 0.730412 2.41036C0.730412 3.65206 1.35126 4.74768 2.33732 5.40505C1.75299 5.36853 1.20518 5.22245 0.693892 4.9668V5.00332C0.693892 6.75631 1.93559 8.21714 3.57902 8.54582C3.28686 8.61887 2.95817 8.65539 2.62948 8.65539C2.41036 8.65539 2.15472 8.61887 1.93559 8.58235C2.41036 10.0066 3.7251 11.0657 5.29549 11.0657C4.05379 12.0153 2.51992 12.5996 0.839974 12.5996C0.547809 12.5996 0.255644 12.5996 0 12.5631C1.60691 13.5857 3.46946 14.17 5.51461 14.17C12.1248 14.17 15.7404 8.69191 15.7404 3.94423C15.7404 3.79814 15.7404 3.61554 15.7404 3.46946C16.4343 2.99469 17.0551 2.37384 17.5299 1.64343Z" fill="#0EA5E9" />
                                    </svg>
                                </div>
                            </div>
                            <p>This is a top quality product. No need to think twice before making it live on web.</p>
                            <a href="" className="text-[#0EA5E9]">#make_it_fast</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonial;