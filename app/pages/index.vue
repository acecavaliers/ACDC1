<template>

  <div>
    <main>
      <section class="bg-[#f1f1f1]">
        <div class="flex justify-end px-5">
          <button
            @click="downloadDocument"
            class="px-4 py-2 bg-gray-700 text-white font-bold rounded shadow"
          >
            Download CV
          </button>
        </div>
      </section>
      <section class="bg-[#f1f1f1]">
        <div
          class="container flex flex-col lg:flex-row items-center py-10 gap-10"
        >
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
              Anthony Caballero
            </h1>
            <p class="text-xl lg:text-2xl mb-4 text-balance">
              Full-Stack Developer
            </p>
            <p class="text-md lg:text-md mb-4 text-balance">
              Full-Stack Developer with expertise in front-end and back-end
              technologies like VB.NET, SAP B1, Crystal Reports, Laravel, and
              Vue.js. Skilled in database design, system optimization, and cloud
              infrastructure (AWS EC2). Proven ability to deliver scalable,
              user-friendly applications and streamline business processes.
              Experienced in report generation, query optimization, and full
              development lifecycle from design to deployment.
            </p>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <div
              class="w-1/2 border-4 border-white rounded-full overflow-hidden"
            >
              <NuxtImg
                sizes="xs:100vw sm:322px"
                src="/ac.png"
                format="webp"
                densities="x1"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#f1f1f1] pb-4">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl pb-2 text-balance">SKILLS</p>

            <h1 class="pt-2 font-extrabold">HARD SKILLS</h1>
            <ul class="ml-2 p-2">
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />Languages : VB.NET, C#, Java, JavaScript, Php, SQL
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />Laravel, Vue JS
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />ERP: SAP Business One, SAP Crystal Report
              </li>
            </ul>

            <h1 class="pt-2 font-extrabold">SOFT SKILLS</h1>
            <ul class="ml-2 p-2">
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Analytical and Problem-Solving Skills
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Attention to Detail
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Collaboration and Communication
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-[#f1f1f1] pb-8">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl text-balance">WORK EXPERIENCE</p>

            <h1 class="pt-2 font-extrabold">
              <span>Apr 2024- Present | </span>
              <span>Full-Stack Developer, DADIANGAS MEDICAL CENTER</span>
            </h1>
            <ul class="p-2">
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Database Design: Created and optimized relational databases for
                hospital systems.
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                History & Physical Examination Form: Developed a responsive form
                for collecting patient data.
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Human Resource Information System:
                <ul class="ml-4 pb-2">
                  <li>
                    - Employee Work Shift Module: Built shift scheduling for HR.
                  </li>
                  <li>
                    - Employee Time-In Record Module: Automated attendance
                    tracking.
                  </li>
                  <li>
                    - Request Time Off Module: Developed leave request and
                    approval workflows.
                  </li>
                </ul>
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />Material Management System:
                <ul class="ml-4 pb-2">
                  <li>- Supplier Modules: Streamlined supplier management.</li>
                  <li>
                    - Purchase Request/Quotation/Order Modules: Automated
                    procurement process.
                  </li>
                  <li>
                    - Approval Setup Module: Created approval workflows for
                    procurement.
                  </li>
                </ul>
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                AWS EC2 Experience:
                <ul class="ml-4 pb-2">
                  <li>
                    - EC2 Deployment: Managed EC2 instances for hosting hospital
                    applications.
                  </li>
                  <li>
                    - CI/CD Integration: Set up automated deployment pipelines.
                  </li>
                  <li>
                    - Auto Scaling: Configured Auto Scaling for resource
                    optimization.
                  </li>
                </ul>
              </li>
            </ul>

            <h1 class="pt-2 font-extrabold pt-4">
              <span>Jan 2021 – Apr 2024 | </span>
              <span>System Developer, STARBRIGHT OFFICE DEPOT INC </span>
            </h1>
            <ul class="p-2">
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Built systems to streamline communication between departments.
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Developed SQL Queries to fetch complex data from different
                tables using joins.
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Developed and Involved in optimizing Stored Procedures and
                queries for faster retrieval and Server efficiency.
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Analyze user needs, design and code software solutions, and test
                and evaluate the software to ensure it meets the required
                specifications.
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                SAP Business One customize and create reports using Crystal
                Reports.
                <ul class="ml-4 pb-2">
                  <li>
                    - Sales Report, E-Sales Report,Collection Report, 2307
                    Reports, Financial Statements, Book of Accounts
                  </li>
                </ul>
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                SAP Business One create and modify the following :
                <ul class="ml-4 pb-2">
                  <li>- User Defined Fields (UDF), Formatted Search,</li>
                  <li>
                    - User Defined Tables (UDT), and User Defined Objects (UDO)
                    based on the company's needs.
                  </li>
                </ul>
              </li>
              <li>
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                Developed software systems using the VB.NET.
                <ul class="ml-4 p-2">
                  <li>- DGCD Price and Stocks Inquiry Program.</li>
                  <li>- Suds Laundry Transactions Monitoring System .</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-[#f1f1f1] pb-4">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl pb-2 text-balance">EDUCATION</p>

            <h1 class="pt-2 font-extrabold">
              B.S. Information Technology | <span> 2017 to 2020</span>
            </h1>
            <h1>NOTRE DAME OF DADIANGAS UNIVERSITY</h1>
            <h1>General Santos City</h1>
          </div>
        </div>
      </section>
      <div class="container">
        <div
          id="printable-area"
          class="hidden w-[8.5in] h-[13in] bg-white mx-auto"
        >
          <!-- Header / Basic Personal Info -->
          <section class="py-4">
            <div class="container flex">
              <img
                class="rounded-md"
                src="/ac.jpg"
                alt="Profile Picture"
                style="width: 66px; height: 85px; object-fit: cover"
              />

              <!-- <img src="/acdc.png" alt="" /> -->
              <div class="px-4">
                <h1 class="text-xl font-medium">ANTHONY CABALLERO</h1>
                <div class="flex text-sm">
                  <div class="sm:w-16">Phone</div>
                  <h1 class="">: +63 991 500 3008</h1>
                </div>
                <div class="flex text-sm">
                  <div class="sm:w-16">Email</div>
                  <h1 class="">: acecavaliers@gmail.com</h1>
                </div>
                <div class="flex text-sm">
                  <div class="sm:w-16">Address</div>
                  <h1 class="">
                    : Babasa Subdivision, Purok 15, Lagao, General Santos City,
                    Philippines
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <!-- Summary -->
          <section class="pb-4">
            <div class="container">
              <h1
                class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-medium"
              >
                SUMMARY
              </h1>
              <p class="text-sm">
                Full-Stack Developer with expertise in front-end and back-end
                technologies like VB.NET, SAP B1, Crystal Reports, Laravel, and
                Vue.js. Skilled in database design, system optimization, and
                cloud infrastructure (AWS EC2). Proven ability to deliver
                scalable, user-friendly applications and streamline business
                processes. Experienced in report generation, query optimization,
                and full development lifecycle from design to deployment.
              </p>
            </div>
          </section>
          <!-- Skills -->
          <section class="pb-4">
            <div class="container flex justify-between">
              <div class="w-1/2">
                <h1
                  class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-medium"
                >
                  HARD SKILLS
                </h1>
                <ul class="text-sm ml-2">
                  <li>• Languages : VB.NET, C#, Java, JavaScript, Php, SQL</li>
                  <li>• Laravel, Vue JS</li>
                  <li>• ERP: SAP Business One, SAP Crystal Report</li>
                </ul>
              </div>
              <div class="w-1/2">
                <h1
                  class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-medium"
                >
                  SOFT SKILLS
                </h1>
                <ul class="text-sm ml-2">
                  <li>• Analytical and Problem-Solving Skills</li>
                  <li>• Attention to Detail</li>
                  <li>• Collaboration and Communication</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Work Experience -->
          <!-- Skills -->
          <section class="pb-4">
            <div class="container">
              <div>
                <h1
                  class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-medium"
                >
                  WORK EXPERIENCE
                </h1>
                <h1 class="flex justify-between pt-2 font-bold text-sm">
                  <span>Full-Stack Developer, DADIANGAS MEDICAL CENTER</span>
                  <span>Apr 2024 – Present</span>
                </h1>
                <ul class="text-sm">
                  <li>
                    • Database Design: Created and optimized relational
                    databases for hospital systems.
                  </li>
                  <li>
                    • History & Physical Examination Form: Developed a
                    responsive form for collecting patient data.
                  </li>
                  <li>
                    • Human Resource Information System:
                    <ul class="text-sm ml-4">
                      <li>
                        - Employee Work Shift Module: Built shift scheduling for
                        HR.
                      </li>
                      <li>
                        - Employee Time-In Record Module: Automated attendance
                        tracking.
                      </li>
                      <li>
                        - Request Time Off Module: Developed leave request and
                        approval workflows.
                      </li>
                    </ul>
                  </li>
                  <li>
                    • Material Management System:
                    <ul class="text-sm ml-4">
                      <li>
                        - Supplier Modules: Streamlined supplier management.
                      </li>
                      <li>
                        - Purchase Request/Quotation/Order Modules: Automated
                        procurement process.
                      </li>
                      <li>
                        - Approval Setup Module: Created approval workflows for
                        procurement.
                      </li>
                    </ul>
                  </li>
                  <li>
                    • AWS EC2 Experience:
                    <ul class="text-sm ml-4">
                      <li>
                        - EC2 Deployment: Managed EC2 instances for hosting
                        hospital applications.
                      </li>
                      <li>
                        - CI/CD Integration: Set up automated deployment
                        pipelines.
                      </li>
                      <li>
                        - Auto Scaling: Configured Auto Scaling for resource
                        optimization.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h1 class="flex justify-between font-bold text-sm pt-4">
                  <div>System Developer, STARBRIGHT OFFICE DEPOT INC.</div>
                  <div>Jan 2021 – Apr 2024</div>
                </h1>
                <ul class="text-sm">
                  <li>
                    • Built systems to streamline communication between
                    departments.
                  </li>
                  <li>
                    • Developed SQL Queries to fetch complex data from different
                    tables using joins.
                  </li>
                  <li>
                    • Developed and Involved in optimizing Stored Procedures and
                    queries for faster retrieval and Server efficiency.
                  </li>
                  <li>
                    • Analyze user needs, design and code software solutions,
                    and test and evaluate the software to ensure it meets the
                    required specifications.
                  </li>
                  <li>
                    • SAP Business One customize and create reports using
                    Crystal Reports.
                    <ul class="text-sm ml-4">
                      <li>
                        - Sales Report, E-Sales Report,Collection Report, 2307
                        Reports, Financial Statements, Book of Accounts
                      </li>
                    </ul>
                  </li>
                  <li>
                    • SAP Business One create and modify the following :
                    <ul class="text-sm ml-4">
                      <li>- User Defined Fields (UDF), Formatted Search,</li>
                      <li>
                        - User Defined Tables (UDT), and User Defined Objects
                        (UDO) based on the company's needs.
                      </li>
                    </ul>
                  </li>
                  <li>
                    • Developed software systems using the VB.NET.
                    <ul class="text-sm ml-4">
                      <li>- DGCD Price and Stocks Inquiry Program.</li>
                      <li>- Suds Laundry Transactions Monitoring System .</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <!-- Education -->
          <section class="pb-4">
            <div class="container">
              <h1
                class="border-b-2 py-2 border-sky-900 text-md text-sky-950 font-medium"
              >
                EDUCATION
              </h1>
              <h1 class="flex justify-between pt-2 text-sm font-medium text-sm">
                <span>B.S. Information Technology </span>
                <span> 2017 to 2020</span>
              </h1>
              <h1 class="text-sm">NOTRE DAME OF DADIANGAS UNIVERSITY</h1>
              <h1 class="text-sm">General Santos City</h1>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { jsPDF } from 'jspdf';
definePageMeta({
  layout: "default",
});
const printDocument = () => {
  const printContent = document.getElementById("printable-area").innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
};
// Define the downloadDocument function (this will download the content as a PDF)
const downloadDocument = () => {
  const printContent = document.getElementById('printable-area').innerHTML;

  // Create a PDF instance with the specified page size (8.5 x 13 inches)
  const doc = new jsPDF({
    unit: 'mm',               // The unit of measurement (millimeters)
    format: [215.9, 330.2],   // Page size: 8.5 x 13 inches in mm (8.5 * 25.4, 13 * 25.4)
  });

  // Add the HTML content to the PDF and scale it to fit the page
  doc.html(printContent, {
    callback: function (doc) {
      // Save the generated PDF
      doc.save('document.pdf');
    },
    x: 0,       // Horizontal margin (in mm)
    y: 0,       // Vertical margin (in mm)
    width: 215.9, // Maximum width (8.5 inches in mm)
    windowWidth: 800, // Width of the window in pixels (for scaling content)
  });
};

</script>
