'use client'

import Link from 'next/link'
import { Playfair_Display_SC } from 'next/font/google'
import { TruckIcon } from '@heroicons/react/24/outline'

const playfairDisplaySc = Playfair_Display_SC({ subsets: ['latin'], weight: ['400', '700'] })

export function PrivacyPolicyComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <TruckIcon className="h-6 w-6 text-[#0E6A75]" />
          <span className={`ml-2 text-2xl font-bold text-gray-900 ${playfairDisplaySc.className}`}>CargoNavis</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-3xl font-bold mb-6 ${playfairDisplaySc.className}`}>Privacy Policy</h1>
          <p className="mb-4">This privacy policy is effective as of April 3, 2023.</p>
          <p className="mb-4">At PontaHR, we deeply value the trust you place in us, and we are committed to ensuring that your privacy and confidentiality are our top priorities. This Privacy Policy serves to outline our commitment to maintaining transparency and providing you with control over how your information is collected, used, and shared. If you have any questions, please send us an email to privacy@pontahr.com and we will make sure to respond back as soon as possible.</p>
          
          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Introduction</h2>
          <p className="mb-4">Along Peopleware d.o.o., having its registered office at Savska cesta 106, Zagreb, and with the VAT number HR01746086877 (hereinafter referred to as PontaHR), is a digital service providing an online platform and tools that help companies handle their internal company operations with a focus on human resources.</p>
          <p className="mb-4">In the course of business, PontaHR needs to collect and process certain data about individuals and therefore it is considered a data controller.</p>
          <p className="mb-4">The purpose of this Policy is to ensure that PontaHR provides all information necessary in connection with the personal data of individuals whose personal data it processes.</p>
          <p className="mb-4">This Policy applies to all personal data processed by PontaHR in relation to any person, irrespective of whether or not such a person is or becomes an employee, customer, supplier, or contact of PontaHR. This Policy does not apply to anonymous data. Anonymous data is data altered in such a way that it cannot be associated with a particular person or cannot be exchanged without disproportionate effort, so it is not considered personal data within the meaning of the applicable legislation.</p>
          <p className="mb-4">This Policy was developed for the purpose of improving the services PontaHR provides to its customers, to protect customers with respect to the confidentiality of their personal data in the process of providing PontaHR's services, to prevent any damage to PontaHR and its customers as data subjects, and to ensure that the processing of personal data by PontaHR is carried out fully in compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) (GDPR) and other applicable laws. The personal data processed by PontaHR in the course of its business are not shared with unauthorized persons, offered, sold or transferred outside the European Economic Area.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Terms and Definitions</h2>
          <p className="mb-4"><strong>Personal data</strong> means any information relating to an identified or identifiable natural person ("data subject"); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that individual.</p>
          <p className="mb-4"><strong>Personal data processing</strong> means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Data We Collect</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">You as a Visitor</h3>
          <p className="mb-4">A "Visitor" is anyone who accesses our public marketing pages at www.pontahr.com. When you visit our pages, you are informed about our use of cookies. If you want to know more, feel free to take a look at our Cookie Policy.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">You as a User</h3>
          <p className="mb-4">A "User" is anyone who registers to use the PontaHR websites and apps. Only registered users may use the platform and services provided by PontaHR.</p>
          <p className="mb-4">When registering as a company, we ask you to provide your full name, company email, and company name. Optionally, you may also provide your company logo and your own personal profile image. You are personally responsible for the data being entered into PontaHR as a platform.</p>
          <p className="mb-4">When invited to be part of an organization that uses PontaHR, we ask you to provide your full name and company email. Optionally, you may also provide your own personal profile image. You are personally responsible for the data being entered into PontaHR as a platform.</p>
          <p className="mb-4">PontaHR is not intended to be used by individuals, but by businesses. Therefore, we ask you not to enter any personal information not pertaining to the operations of your business or yourself as an employee or contractor of that business.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">You as a Candidate</h3>
          <p className="mb-4">A "Candidate" is anyone who applies to a job listing posted by any of our "Users". As an individual being considered for employment by one of our Users, your data may be processed during their recruitment process.</p>
          <p className="mb-4">With respect to the personal data you share with them, we consider our Users as data controllers. The data being collected is your name and email address. Additionally, Users are able to specify any other level of information that is being asked of Candidates during the application process.</p>
          <p className="mb-4">Your personal data as submitted to the Users is only visible to the relevant people inside of the User's organization to which you have applied to. This Privacy Policy does not describe any specific recruitment practices or data being collected and processed by the company you have applied to. Please refer to the privacy policies of the User who published the relevant job listing.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Processing Your Data</h2>
          <p className="mb-4">PontaHR primarily collects, records, stores, and structures personal data for the purpose of providing the data subject with services as part of its business, or for the purpose of complying with legal obligations. The legal grounds for personal data processing are the contractual relationship between PontaHR and the data subject. PontaHR treats such personal data adequately and in compliance with the relevant regulations, irrespective of how such personal data is collected, recorded, stored, and used – on paper, on a computer, or on any other medium. PontaHR processes personal data it receives from data subjects and third parties subject to informing them or as instructed by them. PontaHR does not forward such data to third countries or to any charities.</p>
          <p className="mb-4">For the purposes of conducting its business processes, PontaHR may outsource certain data processing services to processors, but only those that implement the technical, logical, and organizational personal data protection measures implemented by PontaHR. The current data processors are:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>Ars Futura d.o.o., Croatia, Zagreb;</li>
            <li>Amazon Web Services, Inc., Germany, Frankfurt.</li>
          </ol>
          <p className="mb-4">PontaHR stores such personal data collected in an appropriate manner and ensures that they remain confidential. PontaHR will not forward such collected data to third parties without data subject's consent, except where this is necessary to comply with its legal obligations or its obligations under a contract to which the data subject is a party, where this is necessary to perform duties being performed in public interest, or where the data subject discloses such data themselves, as well as in all other cases defined by the applicable regulations.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Your Rights</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Right to be Informed</h3>
          <p className="mb-4">The data subject has the right to request from PontaHR at any time to inform them of whether their personal data is being processed and for what purpose, who the controller is, the contact details of the data protection officer, the categories of personal data being processed, the period for which the personal data will be processed/stored, the source from which such personal data originates and the recipients of such personal data, as well as the right to be informed of their other rights specified in this Policy.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Accessing Data</h3>
          <p className="mb-4">The data subject shall have the right to obtain from the controller confirmation as to whether or not personal data concerning them is being processed, and, where that is the case, access to the personal data and the following information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>the purposes of the processing;</li>
            <li>the categories of personal data concerned;</li>
            <li>the recipients or categories of recipient to whom the personal data have been or will be disclosed;</li>
            <li>where possible, the envisaged period for which the personal data will be stored or the criteria used to determine that period;</li>
            <li>the right to request from PontaHR rectification or erasure of personal data or restriction of processing of personal data concerning the data subject or to object to such processing;</li>
            <li>the right to lodge a complaint with a supervisory authority;</li>
            <li>where the personal data are not collected from the data subject, any available information as to their source;</li>
            <li>the existence of automated decision-making, including profiling, as well as the consequences.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Updating Data</h3>
          <p className="mb-4">The data subject shall have the right to obtain from PontaHR without undue delay the rectification of inaccurate personal data concerning them specifically. The data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Deleting Data</h3>
          <p className="mb-4">The data subject shall have the right to obtain from PontaHR the deletion of personal data concerning them without undue delay if the personal data is no longer necessary in relation to the purposes for which they were collected or otherwise processed, the data subject withdraws consent on which the processing is based and where there is no other legal ground for the processing, the data subject objects to the processing, the personal data have been unlawfully processed, the personal data have to be erased for compliance with a legal obligation in European Union or Member State law to which PontaHR is subject, the personal data have been collected in relation to the offer of information society services to a child.</p>
          <p className="mb-4">The foregoing shall not apply to the extent that processing is necessary for exercising the right of freedom of expression and information, for compliance with a legal obligation which requires processing by European Union or Member State law to which PontaHR is subject or for the performance of a task carried out in the public interest or in the exercise of official authority, for reasons of public interest in the area of public health, for archiving purposes in the public interest, scientific or historical research purposes, or for the establishment, exercise or defense of legal claims.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Complaints</h3>
          <p className="mb-4">The data subject shall have the right to object, on grounds relating to their particular situation, at any time to processing of personal data concerning them including profiling. PontaHR shall no longer process the personal data unless PontaHR demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defense of legal claims.</p>
          <p className="mb-4">Where personal data are processed for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning them for such marketing, which includes profiling to the extent that it is related to such direct marketing.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Data Portability</h3>
          <p className="mb-4">The data subject shall have the right to receive the personal data concerning them, which they have provided to PontaHR, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, where the processing is based on their consent and the processing is carried out by automated means.</p>
          <p className="mb-4">The data subject shall have the right to have the personal data transmitted directly from PontaHR to another controller, where technically feasible and such right shall not adversely affect the rights and freedoms of others.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Withdrawing Consent</h3>
          <p className="mb-4">Data subject's consent is one of the legitimate grounds for processing data relating to the data subject. The data subject may at any time withdraw the consent given by them. Such withdrawal of consent shall not affect the lawfulness of data processing performed before the consent was withdrawn.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Data Protection Officer</h2>
          <p className="mb-4">PontaHR has appointed a personal data protection officer and each data subject may contact them in connection with the protection of their personal data at privacy@pontahr.com.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Privacy of Children</h2>
          <p className="mb-4">We do not knowingly collect, maintain, or use Personal Information from people under the 18 years of age, and no part of our website or apps is directed to people under the age of 18.</p>
          <p className="mb-4">If anyone under the age of 18 has provided PontaHR with their personal data, PontaHR will delete such information immediately after being alerted to it.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Cookies</h2>
          <p className="mb-4">To ensure the optimal functionality of our websites and apps, and to enhance your user experience, we utilize small data files known as "cookies." Our Cookie Policy provides comprehensive details on the nature of cookies and the manner in which we utilize them.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Updates to the Policy</h2>
          <p className="mb-4">PontaHR may update this Privacy Policy from time to time in response to legal, technical, or business developments. When we update this Privacy Policy, we will take appropriate measures to inform you, consistent with the significance of the changes we make. When required by law, we will make sure to obtain your consent. You can see the date this policy was last updated at the top of this page.</p>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 mt-8 border-t">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 CargoNavis. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}