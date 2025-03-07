<template>
  <main>
    <div>
      <!-- Header / Basic Personal Info -->
      <section class="">
        <div
          class="container flex flex-col lg:flex-row items-center py-10 gap-10"
        >
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
              Anthony Caballero
            </h1>

            <div class="">
              <div class="flex">
                <div class="sm:w-16">Phone</div>
                <h1 class="">: +63 991 500 3008</h1>
              </div>
              <div class="flex">
                <div class="sm:w-16">Email</div>
                <h1 class="">: acecavaliers@gmail.com</h1>
              </div>
              <div class="flex">
                <div class="sm:w-16">Address</div>
                <h1 class="">
                  : Babasa Subdivision, Purok 15, Lagao, General Santos City,
                  Philippines
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-4">
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
      <!-- hide  -->
      <div class="hidden">
        <section class="bg-gray-100 py-4">
          <div class="container flex">
            <NuxtImg
              class="rounded-md"
              sizes="xs:79px sm:79px"
              src="/ac.jpg"
              format="webp"
              densities="x1"
              alt="Profile Picture"
            />

            <!-- <img src="/acdc.png" alt="" /> -->
            <div class="px-4">
              <h1 class="text-xl font-extrabold">Anthony Caballero</h1>
              <div class="flex">
                <div class="sm:w-20">Phone</div>
                <h1 class="">: +63 991 500 3008</h1>
              </div>
              <div class="flex">
                <div class="sm:w-20">Email</div>
                <h1 class="">: acecavaliers@gmail.com</h1>
              </div>
              <div class="flex">
                <div class="sm:w-20">Address</div>
                <h1 class="">
                  : Babasa Subdivision, Purok 15, Lagao, General Santos City,
                  Philippines
                </h1>
              </div>
            </div>
          </div>
        </section>
        <!-- Summary -->
        <section class="bg-gray-100 pb-8">
          <div class="container">
            <h1
              class="border-b-2 mb-1.5 border-sky-900 text-md text-sky-950 font-extrabold"
            >
              SUMMARY
            </h1>
            <p class="">
              Full-Stack Developer with expertise in front-end and back-end
              technologies like VB.NET, SAP B1, Crystal Reports, Laravel, and
              Vue.js. Skilled in database design, system optimization, and cloud
              infrastructure (AWS EC2). Proven ability to deliver scalable,
              user-friendly applications and streamline business processes.
              Experienced in report generation, query optimization, and full
              development lifecycle from design to deployment.
            </p>
          </div>
        </section>
        <!-- Skills -->
        <section class="bg-gray-100 pb-8">
          <div class="container flex justify-between">
            <div class="w-1/2">
              <h1
                class="border-b-2 mb-1.5 border-sky-900 text-md text-sky-950 font-extrabold"
              >
                HARD SKILLS
              </h1>
              <ul class="ml-2">
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
            </div>
            <div class="w-1/2">
              <h1
                class="border-b-2 mb-1.5 border-sky-900 text-md text-sky-950 font-extrabold"
              >
                SOFT SKILLS
              </h1>
              <ul class="ml-2">
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

        <!-- Work Experience -->
        <section class="bg-gray-100 pb-8">
          <div class="container">
            <div>
              <h1
                class="border-b-2 mb-1.5 border-sky-900 text-md text-sky-950 font-extrabold"
              >
                WORK EXPERIENCE
              </h1>
              <h1 class="flex justify-between pt-2 font-extrabold">
                <span>Full-Stack Developer, DADIANGAS MEDICAL CENTER</span>
                <span>Apr 2024- Present</span>
              </h1>
              <ul>
                <li>
                  <Icon
                    name="ion:ellipse-sharp"
                    style="color: black"
                    class="w-2 h-2 mr-1.5"
                  />
                  Database Design: Created and optimized relational databases
                  for hospital systems.
                </li>
                <li>
                  <Icon
                    name="ion:ellipse-sharp"
                    style="color: black"
                    class="w-2 h-2 mr-1.5"
                  />
                  History & Physical Examination Form: Developed a responsive
                  form for collecting patient data.
                </li>
                <li>
                  <Icon
                    name="ion:ellipse-sharp"
                    style="color: black"
                    class="w-2 h-2 mr-1.5"
                  />
                  Human Resource Information System:
                  <ul class="ml-4">
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
                  <Icon
                    name="ion:ellipse-sharp"
                    style="color: black"
                    class="w-2 h-2 mr-1.5"
                  />Material Management System:
                  <ul class="ml-4">
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
                  <Icon
                    name="ion:ellipse-sharp"
                    style="color: black"
                    class="w-2 h-2 mr-1.5"
                  />
                  AWS EC2 Experience:
                  <ul class="ml-4">
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

              <h1 class="flex justify-between pt-2 font-extrabold pt-4">
                <span>System Developer, STARBRIGHT OFFICE DEPOT INC </span>
                <span>Jan 2021 – Apr 2024</span>
              </h1>
              <ul>
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
                  Analyze user needs, design and code software solutions, and
                  test and evaluate the software to ensure it meets the required
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
                  <ul class="ml-4">
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
                  <ul class="ml-4">
                    <li>- User Defined Fields (UDF), Formatted Search,</li>
                    <li>
                      - User Defined Tables (UDT), and User Defined Objects
                      (UDO) based on the company's needs.
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
                  <ul class="ml-4">
                    <li>- DGCD Price and Stocks Inquiry Program.</li>
                    <li>- Suds Laundry Transactions Monitoring System .</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="bg-gray-100 pb-8">
          <div class="container">
            <h1
              class="border-b-2 mb-1.5 border-sky-900 text-md text-sky-950 font-extrabold"
            >
              EDUCATION
            </h1>
            <h1 class="flex justify-between pt-2 font-extrabold">
              <span>B.S. Information Technology </span>
              <span> 2017 to 2020</span>
            </h1>
            <h1>NOTRE DAME OF DADIANGAS UNIVERSITY</h1>
            <h1>General Santos City</h1>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup></script>
