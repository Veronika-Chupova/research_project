import {useState, useRef, useEffect} from 'react'
import { Document, Page, pdfjs} from 'react-pdf'
import down from './assets/down.png'
import checked from './assets/icons8-check-mark-32.png'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
 
function Start () {
    const [consent, setConsent] = useState ({
        pi: false,
        tu: false
    })
    const navigate = useNavigate ()
    const btn_style = consent.pi && consent.tu ? 'bg-green-600' : 'bg-green-200'

    function handleCheckbox (e) {
        const { name } = e.target
        setConsent(prev => ({...prev, [name]: !prev[name]}))

    }

    function handleStart () {
        if (consent.pi && consent.tu) {
            navigate ('/passcheck')
        }
    }

    return <div className='text-center font-baseline font-normal'>
    <div className='inline-block text-left mt-10 w-10/12'>
    <h3 className='text-2xl text-violet-500 mb-5'>Welcome to Research Page</h3>
    <p className='text-sm font-light mb-5'>This web application is an integral part of the academic research "Addressing the problem of insecure repetitive patterns in user-generated passwords and PIN codes with a focus on smartphone users" conducting as a Master's dissertation project at Edge Hill Universuty.</p>
        <form>
            <p className='text-sm font-light mb-5'>If you intend to take part in the study, please read carefully through the Participant Information and Website Terms of Use and sign your consent on both.</p>
            <details className='bg-violet-600 rounded mt-2'>
                <summary className='text-white list-none'>
                    <div className='flex flex-row justify-stretch items-center h-10 p-2 gap-2'>
                        <img src={down} className='inline h-3/4 w-auto'/>
                        <p className='inline flex-1'>Participant Information</p>
                        <img src={checked} className={consent.pi ? '' : 'hidden'}/>
                    </div>
                </summary>
                <div className='text-[10px] font-light bg-white py-2 h-96 text-clip ovrflow-hidden overflow-auto'>
                    <p><u><span>What is the aim of the study?</span></u></p>
                    <p><span >The study aims to check how different screen keyboards impact user-generated password strength and complexity.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>Why have you been invited to participate?</span></u></p>
                    <p><span >To fulfill the research aim and objectives, participants with various backgroung who satisty the following criteria were invited: capable persons over 18 years old in possession of Android/iOS - based smartphone with access to the Internet and able to read in English.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>Do you have to participate?</span></u></p>
                    <p><span >This document was provided to help your decision on whether you would like to participate in the study or not. It is completely up to you what you will decide eventually.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>How many times you can participate?</span></u></p>
                    <p><span >The study needs to ensure data is collected once from every participant. Because of that reason, the dedicated website at <span>[the link will be provided later]</span> uses cookies to detect previous opening. The cookie is represented by unified text data stored in the participant&rsquo;s internet browser (local storage) until manually deleted. The cookie only allows detecting previous openings of the website and does not allow user identification or collected data attribution.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>What actions would you be required to do?</span></u></p>
                    <p><span >You will need to open the website on your smartphone using an internet browser. Then you will be asked to complete two web forms. The first will require generating and inputting twice of a new password that satisfies the described criteria using the suggested screen keyboard. The second one will require creating and inputting twice a new 4-digit PIN code using the suggested screen numeric keyboard. The anticipated time to complete both forms is no more than 5 minutes.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>What risks are associated with participation in the study?</span></u></p>
                    <p><span >When participating in the study, you are encouraged to strictly adhere to the study recommendations and not use any of your active or previously used passwords. Also, you are strongly recommended not to set a password and PIN code generated within the study participation in your future online activity. Following these warnings will eliminate the risks of sensitive data compromisation.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>What benefits are associated with participation in the study?</span></u></p>
                    <p><span >The study participation does not provide participants with any direct benefits. However, this research elaborates on password strengthening and resistance against cyber-attacks, which may help enhance data protection mechanisms in the future.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>What data about you will be collected?</span></u></p>
                    <p><span >Within the study, any personal data or other identifiers will NOT be collected. All data collected will be anonymous, which means it will be impossible for anyone to identify you and attribute data to you. Because of that reason, the data you provide cannot be withdrawn after web forms are completed. Within the study, the following data will be collected:</span></p>
                        <ul>
                            <li><span>User-generated information: the inputted password and PIN code</span></li>
                            <li><span>Technical environment information: device model (e.g. iPhone X), operating system (e.g. iOS 12.4), Internet browser version (e.g. Safari)</span></li>
                            <li><span>Statistical information: time-stamps on user-system interactions such as taps, scrolls, button pushes, checkbox ticks</span></li>
                        </ul>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>How will the collected data be handled and used?</span></u></p>
                    <p><span >Up to the end of the data collection phase <span>[date will be added later]</span>, the anonymous data will be stored securely in the cloud-based database, to which only the research author has access. In the data analysis phase, the anonymous data accrued in the previous step will be moved onto a researcher&apos;s local drive outside any network and inaccessible to a third party. Then, the results of the data analysis will be published as a part of the Master&apos;s dissertation.&nbsp;</span></p>
                    <p><span >The data will be stored and analysed in plain text. After the University checks are completed and the research project is marked, the data will be destroyed with no recovery option.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>Informed consent.</span></u></p>
                    <p><span >Your consent to participate in the research must be fully informed and voluntary. You have the right and opportunity to ask any questions and clarify any concerns related to your participation in the given study before providing your consent. There is a contact section at the end of this document for you to address any related inquiries.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>Can you withdraw your consent on participation and collected data?</span></u></p>
                    <p><span >The study design aims at collecting the data anonymously. This fact excludes the possibility of identifying participants by any means. Therefore, withdrawal after completion of the assigned study tasks is unavailable due to the impossibility of mapping the data.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>How can you find out about the results of the study?</span></u></p>
                    <p><span >The study outcomes will be available starting from 27 September 2024. A brief presentation of the key findings will be published on the website <span>[the link will be provided later]</span> where the participants took part in the research and will be publicly available up to 31 December 2024.</span></p>
                    <p><span >&nbsp;</span></p>
                    <p><u><span>Ethical approvals.</span></u></p>
                    <p><span >This study is performed in accordance with Edge Hill University Research Ethics Policy available at https://www.edgehill.ac.uk/wp-content/uploads/documents/research-ethics-policy-1-1.pdf.</span></p>
                    <p><span >The research proposal has been reviewed and then granted ethical approval by the Department of Computer Science of Edge Hill University.</span></p>
                    <div className='flex flex-row gap-2 items-start mt-2 bg-white'>
                        <input type='checkbox' onChange={handleCheckbox} name='pi' className=' '/>
                        <label className='text-sm'>I have read and understood "Participant Information" and give my consent to take part in the research</label>
                    </div>
                </div>  
            </details>
            <details className='bg-violet-600 rounded mt-2'>
                <summary className='text-white list-none'>
                    <div className='flex flex-row justify-stretch items-center h-10 p-2 gap-2'>
                        <img src={down} className='inline h-3/4 w-auto'/>
                        <p className='inline flex-1'>Terms of Use</p>
                        <img src={checked} className={consent.tu ? '' : 'hidden'}/>
                    </div>
                </summary>
                <div className='text-[10px] font-light bg-white py-2 h-96 text-clip ovrflow-hidden overflow-auto'>
                    <p><span>These Terms and Conditions of Use (&ldquo;T&amp;C&rdquo;) apply to the website located at <span>[the link will be provided later]</span> and all associated sites linked to <span>[the link will be provided later]</span> (&ldquo;Site&rdquo;). By using the Site, you agree to these T&amp;C. If you do not agree, do not use the Site.</span></p>
                    <p><span>The Site is the property of Veronika Chupova and was established for research purposes under Edge Hill University supervision. The content of the Site may not be copied, modified, or sold in any way without the owner&rsquo;s written permission. You acknowledge that you have no right to access the Site&rsquo;s source code form.</span></p>
                    <p><span>You are not required to provide any personal, private, or sensitive data to use the Site. You understand that you are responsible for any consequences caused by providing personal, private, or sensitive data willfully.</span></p>
                    <p><span>You may use the Site only for lawful personal use to take part in the non-commercial research detailed in the Participant Information document.</span></p>
                    <p><span>The site is not intended for use of persons under 18 years old and incapable persons.</span></p>
                    <p><span>You are prohibited from exposing other people&rsquo;s personal, private, or sensitive data on the Site by any means.</span></p>
                    <p><span>The Site uses essential cookies to ensure the related research purpose. The cookie is represented by unified text data stored in the user&rsquo;s Internet browser (local storage) until manually deleted. The cookie only allows detecting previous openings of the website and does not allow user identification or collected data attribution.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>If you have any questions about T&amp;C, please email them at 25868705@edgehill.ac.uk</span></p>
                    <div className='flex flex-row gap-2 items-start mt-2 bg-white'>
                        <input type='checkbox' onChange={handleCheckbox} name='tu' className=' '/>
                        <label className='text-sm'>I have read and understood "Terms of Use"</label>
                    </div>
                </div>  
            </details>
            <button className = {'min-w-28 h-8 rounded mt-10 text-white font-black mb-20 ' + btn_style} onClick={handleStart} type='submit'>
                <p className='inline text-md font-semibold'>Start</p>
            </button>
        </form>
    </div>
    </div>   
 }

export default Start

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
//   ).toString();

// const [numPages, setNumPages] = useState(null);

// function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
// }
               {/* <Document
                    file={info}
                    // onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages),(el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width = '300'
                        />),
                    )}
                    <Page
                            key={uuidv4()}
                            pageNumber={1}
                            width = '300'
                    />
                    <Page
                            key={uuidv4()}
                            pageNumber={2}
                            width = '300'
                    />
                    </Document>*/}

                    {/* <iframe src='./assets/Participant_Information.pdf' height='300' width='200'>
                </iframe> */}
                {/* <object data='./assets/Participant_Information.pdf' height='300' width='200' type="application/pdf">
                    <embed src='./assets/Participant_Information.pdf' type="application/pdf"/>
                </object> */}

