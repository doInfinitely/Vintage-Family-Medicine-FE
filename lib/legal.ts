// Legal document content, supplied by the practice (Sept 2026).
//   privacy-policy → "Privacy Practices" (office policy PDF)
//   hipaa-notice   → HHS model Notice of Privacy Practices (DOCX)
// terms-of-use is intentionally absent: the practice has not supplied text.
// Adding a key here also requires adding it to Footer.tsx and sitemap.ts.

export type Block =
  | { t: 'h2' | 'h3' | 'p'; en: string; es: string }
  | { t: 'ul'; en: string[]; es: string[] };

export interface LegalDoc {
  title_en: string;
  title_es: string;
  intro_en?: string;
  intro_es?: string;
  blocks: Block[];
}

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  'privacy-policy': {
    title_en: `Privacy Practices`,
    title_es: `Prácticas de Privacidad`,
    blocks: [
      { t: 'h2', en: `Purpose`, es: `Propósito` },
      {
        t: 'p',
        en: `This office is committed to compliance with all federal and state laws that pertain to any aspect of the clinical practices or business procedures of this office. In particular, privacy and security rules relating to the Health Insurance Portability and Accountability Act (HIPAA), along with related state laws, are integral to matters of privacy, medical records, the confidentiality of communications, and other topics.`,
        es: `Esta oficina se compromete a cumplir con todas las leyes federales y estatales relacionadas con cualquier aspecto de las prácticas clínicas o los procedimientos comerciales de esta oficina. En particular, las normas de privacidad y seguridad relacionadas con la Ley de Portabilidad y Responsabilidad del Seguro Médico (HIPAA), junto con las leyes estatales relacionadas, son fundamentales en materia de privacidad, expedientes médicos, confidencialidad de las comunicaciones y otros temas.`,
      },
      {
        t: 'p',
        en: `Health information is used for a variety of legitimate purposes, including patient care, quality review, education, research, public health, and legal and financial interests.`,
        es: `La información de salud se utiliza para diversos fines legítimos, incluidos la atención al paciente, la revisión de calidad, la educación, la investigación, la salud pública y los intereses legales y financieros.`,
      },
      {
        t: 'p',
        en: `Regardless of the use or users, patients must be assured that the information they share with health care professionals will remain confidential. Failure to provide this assurance could result in patients giving incomplete and even false information, which could affect the quality and outcome of care as well as the reliability of the information. Improper disclosure of health care information may cause significant harm to a person's privacy, health care, reputation, and may unfairly affect the ability of a person to obtain employment, education, insurance, and credit.`,
        es: `Independientemente del uso o de los usuarios, se debe garantizar a los pacientes que la información que comparten con los profesionales de la salud se mantendrá confidencial. No brindar esta garantía podría hacer que los pacientes proporcionen información incompleta e incluso falsa, lo que podría afectar la calidad y el resultado de la atención, así como la fiabilidad de la información. La divulgación indebida de información de atención médica puede causar un daño significativo a la privacidad, la atención médica y la reputación de una persona, y puede afectar injustamente su capacidad para obtener empleo, educación, seguro y crédito.`,
      },
      { t: 'h2', en: `Policy`, es: `Política` },
      {
        t: 'p',
        en: `The HIPAA Privacy Policy applies to all protected information (PHI) in this office. This includes information that is stored and transmitted electronically, paper records, and oral communications. PHI includes any information as it relates to the past, present, or future physical or mental health condition of our patients, any treatments they receive, and health care payment information.`,
        es: `La Política de Privacidad de HIPAA se aplica a toda la información protegida (PHI) de esta oficina. Esto incluye la información almacenada y transmitida electrónicamente, los registros en papel y las comunicaciones orales. La PHI incluye cualquier información relacionada con el estado de salud física o mental pasado, presente o futuro de nuestros pacientes, los tratamientos que reciben y la información de pago de la atención médica.`,
      },
      {
        t: 'p',
        en: `Under all circumstances, when PHI must be communicated either within this office or to a third party, only the minimal amount of information is to be given that is necessary to accomplish the appropriate purpose that will be divulged.`,
        es: `En todas las circunstancias, cuando la PHI deba comunicarse dentro de esta oficina o a un tercero, solo se proporcionará la cantidad mínima de información necesaria para lograr el propósito correspondiente.`,
      },
      {
        t: 'p',
        en: `PHI that is shared as part of delivering quality patient care will not be scrutinized under the minimal necessary guidelines.`,
        es: `La PHI que se comparte como parte de la prestación de atención de calidad al paciente no se someterá a las pautas de información mínima necesaria.`,
      },
      {
        t: 'p',
        en: `Only medical records and files that are immediately necessary for patient care are to be kept at workstations. They should be filed appropriately if not in use at the moment.`,
        es: `Solo se deben mantener en las estaciones de trabajo los expedientes y archivos médicos que sean inmediatamente necesarios para la atención del paciente. Deben archivarse adecuadamente cuando no estén en uso.`,
      },
      {
        t: 'p',
        en: `Even acknowledging or indicating that a person is a patient of this practice is inappropriate.`,
        es: `Incluso reconocer o indicar que una persona es paciente de esta práctica es inapropiado.`,
      },
      {
        t: 'p',
        en: `A patient's presence in the clinic could indicate the nature of the patient's illness and should not be disclosed to anyone not involved in the immediate care of the patient. Any unauthorized disclosure by employees could render the clinic liable for damages on grounds of defamation or invasion of the right of privacy.`,
        es: `La presencia de un paciente en la clínica podría indicar la naturaleza de su enfermedad y no debe divulgarse a ninguna persona que no participe en su atención inmediata. Cualquier divulgación no autorizada por parte de los empleados podría hacer que la clínica sea responsable de daños por difamación o invasión del derecho a la privacidad.`,
      },
    ],
  },
  'hipaa-notice': {
    title_en: `Notice of Privacy Practices`,
    title_es: `Aviso de Prácticas de Privacidad`,
    intro_en: `Your Information. Your Rights. Our Responsibilities. This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.`,
    intro_es: `Su Información. Sus Derechos. Nuestras Responsabilidades. Este aviso describe cómo puede usarse y divulgarse su información médica y cómo puede usted acceder a esta información. Por favor, revíselo cuidadosamente.`,
    blocks: [
      { t: 'h2', en: `Your Rights`, es: `Sus Derechos` },
      { t: 'p', en: `You have the right to:`, es: `Usted tiene derecho a:` },
      {
        t: 'ul',
        en: [
          `Get a copy of your paper or electronic medical record`,
          `Correct your paper or electronic medical record`,
          `Request confidential communication`,
          `Ask us to limit the information we share`,
          `Get a list of those with whom we've shared your information`,
          `Get a copy of this privacy notice`,
          `Choose someone to act for you`,
          `File a complaint if you believe your privacy rights have been violated`,
        ],
        es: [
          `Obtener una copia de su expediente médico en papel o electrónico`,
          `Corregir su expediente médico en papel o electrónico`,
          `Solicitar comunicación confidencial`,
          `Pedirnos que limitemos la información que compartimos`,
          `Obtener una lista de aquellos con quienes hemos compartido su información`,
          `Obtener una copia de este aviso de privacidad`,
          `Elegir a alguien para que actúe en su nombre`,
          `Presentar una queja si cree que se han violado sus derechos de privacidad`,
        ],
      },
      { t: 'h2', en: `Your Choices`, es: `Sus Opciones` },
      {
        t: 'p',
        en: `You have some choices in the way that we use and share information as we:`,
        es: `Usted tiene algunas opciones sobre la forma en que usamos y compartimos su información cuando:`,
      },
      {
        t: 'ul',
        en: [
          `Tell family and friends about your condition`,
          `Provide disaster relief`,
          `Include you in a hospital directory`,
          `Provide mental health care`,
          `Market our services and sell your information`,
          `Raise funds`,
        ],
        es: [
          `Informamos a familiares y amigos sobre su condición`,
          `Brindamos ayuda en casos de desastre`,
          `Lo incluimos en un directorio hospitalario`,
          `Brindamos atención de salud mental`,
          `Promocionamos nuestros servicios y vendemos su información`,
          `Recaudamos fondos`,
        ],
      },
      { t: 'h2', en: `Our Uses and Disclosures`, es: `Nuestros Usos y Divulgaciones` },
      {
        t: 'p',
        en: `We may use and share your information as we:`,
        es: `Podemos usar y compartir su información cuando:`,
      },
      {
        t: 'ul',
        en: [
          `Treat you`,
          `Run our organization`,
          `Bill for your services`,
          `Help with public health and safety issues`,
          `Do research`,
          `Comply with the law`,
          `Respond to organ and tissue donation requests`,
          `Work with a medical examiner or funeral director`,
          `Address workers' compensation, law enforcement, and other government requests`,
          `Respond to lawsuits and legal actions`,
        ],
        es: [
          `Lo tratamos`,
          `Administramos nuestra organización`,
          `Facturamos por sus servicios`,
          `Ayudamos con asuntos de salud y seguridad pública`,
          `Realizamos investigaciones`,
          `Cumplimos con la ley`,
          `Respondemos a solicitudes de donación de órganos y tejidos`,
          `Trabajamos con un médico forense o director funerario`,
          `Atendemos solicitudes de compensación laboral, de las fuerzas del orden y de otras entidades gubernamentales`,
          `Respondemos a demandas y acciones legales`,
        ],
      },
      {
        t: 'p',
        en: `To the extent that we have your substance use disorder patient records, subject to 42 CFR part 2, we will not share that information for investigations or legal proceedings against you without (1) your written consent or (2) a court order and a subpoena.`,
        es: `En la medida en que tengamos sus registros de paciente por trastorno por consumo de sustancias, sujetos a la parte 2 del título 42 del CFR, no compartiremos esa información para investigaciones o procedimientos legales en su contra sin (1) su consentimiento por escrito o (2) una orden judicial y una citación.`,
      },
      { t: 'h2', en: `Your Rights in Detail`, es: `Sus Derechos en Detalle` },
      {
        t: 'p',
        en: `When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.`,
        es: `En lo que respecta a su información de salud, usted tiene ciertos derechos. Esta sección explica sus derechos y algunas de nuestras responsabilidades para ayudarle.`,
      },
      { t: 'h3', en: `Get an electronic or paper copy of your medical record`, es: `Obtener una copia electrónica o impresa de su expediente médico` },
      {
        t: 'p',
        en: `You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this. We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.`,
        es: `Puede solicitar ver u obtener una copia electrónica o impresa de su expediente médico y de otra información de salud que tengamos sobre usted. Pregúntenos cómo hacerlo. Le proporcionaremos una copia o un resumen de su información de salud, generalmente dentro de los 30 días posteriores a su solicitud. Podemos cobrar una tarifa razonable basada en los costos.`,
      },
      { t: 'h3', en: `Ask us to correct your medical record`, es: `Pedirnos que corrijamos su expediente médico` },
      {
        t: 'p',
        en: `You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this. We may say "no" to your request, but we'll tell you why in writing within 60 days.`,
        es: `Puede pedirnos que corrijamos la información de salud sobre usted que considere incorrecta o incompleta. Pregúntenos cómo hacerlo. Podemos decir "no" a su solicitud, pero le explicaremos por qué por escrito dentro de los 60 días.`,
      },
      { t: 'h3', en: `Request confidential communications`, es: `Solicitar comunicaciones confidenciales` },
      {
        t: 'p',
        en: `You can ask us to contact you in a specific way (for example, home, office, or cell phone) or to send mail to a different address. We will say "yes" to all reasonable requests.`,
        es: `Puede pedirnos que nos comuniquemos con usted de una manera específica (por ejemplo, al teléfono de casa, de la oficina o celular) o que enviemos la correspondencia a una dirección diferente. Diremos "sí" a todas las solicitudes razonables.`,
      },
      { t: 'h3', en: `Ask us to limit what we use or share`, es: `Pedirnos que limitemos lo que usamos o compartimos` },
      {
        t: 'p',
        en: `You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say "no," for example, if it could affect your care. If we agree to your request, we may still share this information in the event that you need emergency treatment.`,
        es: `Puede pedirnos que no usemos ni compartamos cierta información de salud para tratamiento, pago u operaciones. No estamos obligados a aceptar su solicitud y podemos decir "no", por ejemplo, si ello pudiera afectar su atención. Si aceptamos su solicitud, aún podríamos compartir esta información en caso de que necesite tratamiento de emergencia.`,
      },
      {
        t: 'p',
        en: `If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say "yes" unless a law requires us to share that information.`,
        es: `Si paga en su totalidad y de su bolsillo un servicio o artículo de atención médica, puede pedirnos que no compartamos esa información con su aseguradora con fines de pago o de nuestras operaciones. Diremos "sí" a menos que una ley nos exija compartir esa información.`,
      },
      { t: 'h3', en: `Get a list of those with whom we've shared information`, es: `Obtener una lista de aquellos con quienes hemos compartido información` },
      {
        t: 'p',
        en: `You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why. We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We'll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.`,
        es: `Puede solicitar una lista (contabilidad) de las ocasiones en que hemos compartido su información de salud durante los seis años anteriores a la fecha de su solicitud, con quién la compartimos y por qué. Incluiremos todas las divulgaciones excepto las relacionadas con tratamiento, pago y operaciones de atención médica, y ciertas otras divulgaciones (como aquellas que usted nos pidió hacer). Proporcionaremos una contabilidad al año de forma gratuita, pero cobraremos una tarifa razonable basada en los costos si solicita otra dentro de los 12 meses.`,
      },
      { t: 'h3', en: `Get a copy of this privacy notice`, es: `Obtener una copia de este aviso de privacidad` },
      {
        t: 'p',
        en: `You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.`,
        es: `Puede solicitar una copia impresa de este aviso en cualquier momento, incluso si aceptó recibirlo electrónicamente. Le proporcionaremos una copia impresa de inmediato.`,
      },
      { t: 'h3', en: `Choose someone to act for you`, es: `Elegir a alguien para que actúe en su nombre` },
      {
        t: 'p',
        en: `If someone has authority to act as your personal representative, such as if someone has your medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information. We will make sure the person has this authority and can act for you before we take any action.`,
        es: `Si alguien tiene autoridad para actuar como su representante personal, por ejemplo, si tiene su poder notarial médico o es su tutor legal, esa persona puede ejercer sus derechos y tomar decisiones sobre su información de salud. Nos aseguraremos de que la persona tenga esta autoridad y pueda actuar en su nombre antes de tomar cualquier medida.`,
      },
      { t: 'h3', en: `File a complaint if you feel your rights are violated`, es: `Presentar una queja si considera que se violaron sus derechos` },
      {
        t: 'p',
        en: `You can complain if you feel we have violated your rights by contacting us using the information at the bottom of this page.`,
        es: `Puede presentar una queja si considera que hemos violado sus derechos, comunicándose con nosotros mediante la información que aparece al final de esta página.`,
      },
      {
        t: 'p',
        en: `You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting www.hhs.gov/hipaa/filing-a-complaint/index.html.`,
        es: `Puede presentar una queja ante la Oficina de Derechos Civiles del Departamento de Salud y Servicios Humanos de los EE. UU. enviando una carta a 200 Independence Avenue, S.W., Washington, D.C. 20201, llamando al 1-877-696-6775 o visitando www.hhs.gov/hipaa/filing-a-complaint/index.html.`,
      },
      {
        t: 'p',
        en: `We will not retaliate against you for filing a complaint.`,
        es: `No tomaremos represalias en su contra por presentar una queja.`,
      },
      { t: 'h2', en: `Your Choices in Detail`, es: `Sus Opciones en Detalle` },
      {
        t: 'p',
        en: `For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.`,
        es: `Para cierta información de salud, puede indicarnos sus preferencias sobre lo que compartimos. Si tiene una preferencia clara sobre cómo compartimos su información en las situaciones que se describen a continuación, háblenos. Díganos qué desea que hagamos y seguiremos sus instrucciones.`,
      },
      {
        t: 'p',
        en: `In these cases, you have both the right and choice to tell us to:`,
        es: `En estos casos, usted tiene el derecho y la opción de pedirnos que:`,
      },
      {
        t: 'ul',
        en: [
          `Share information with your family, close friends, or others involved in your care or payment for your care`,
          `Share information in a disaster relief situation`,
          `Include your information in a hospital directory`,
        ],
        es: [
          `Compartamos información con su familia, amigos cercanos u otras personas involucradas en su atención o en el pago de su atención`,
          `Compartamos información en una situación de ayuda en caso de desastre`,
          `Incluyamos su información en un directorio hospitalario`,
        ],
      },
      {
        t: 'p',
        en: `If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.`,
        es: `Si no puede informarnos su preferencia, por ejemplo, si está inconsciente, podemos compartir su información si creemos que es en su mejor interés. También podemos compartir su información cuando sea necesario para reducir una amenaza grave e inminente para la salud o la seguridad.`,
      },
      {
        t: 'p',
        en: `In these cases we never share your information unless you give us written permission:`,
        es: `En estos casos, nunca compartimos su información a menos que nos dé permiso por escrito:`,
      },
      {
        t: 'ul',
        en: [`Marketing purposes`, `Sale of your information`, `Most sharing of psychotherapy notes`],
        es: [`Fines de mercadeo`, `Venta de su información`, `La mayoría de las divulgaciones de notas de psicoterapia`],
      },
      {
        t: 'p',
        en: `In the case of fundraising: we may contact you for fundraising efforts, but you can tell us not to contact you again. If we have your substance use disorder patient records, subject to 42 CFR part 2, we will give you clear and obvious notice in advance and a choice about whether to receive fundraising communications that use your Part 2 information.`,
        es: `En el caso de la recaudación de fondos: podemos comunicarnos con usted para actividades de recaudación de fondos, pero puede pedirnos que no lo contactemos de nuevo. Si tenemos sus registros de paciente por trastorno por consumo de sustancias, sujetos a la parte 2 del título 42 del CFR, le daremos un aviso claro y evidente por adelantado y la opción de recibir o no comunicaciones de recaudación de fondos que utilicen su información de la Parte 2.`,
      },
      { t: 'h2', en: `Our Uses and Disclosures in Detail`, es: `Nuestros Usos y Divulgaciones en Detalle` },
      {
        t: 'p',
        en: `We typically use or share your health information in the following ways.`,
        es: `Por lo general, usamos o compartimos su información de salud de las siguientes maneras.`,
      },
      { t: 'h3', en: `Treat you`, es: `Para tratarlo` },
      {
        t: 'p',
        en: `We can use your health information and share it with other professionals who are treating you. Example: A doctor treating you for an injury asks another doctor about your overall health condition.`,
        es: `Podemos usar su información de salud y compartirla con otros profesionales que lo estén tratando. Ejemplo: un médico que lo trata por una lesión le pregunta a otro médico sobre su estado de salud general.`,
      },
      { t: 'h3', en: `Run our organization`, es: `Para administrar nuestra organización` },
      {
        t: 'p',
        en: `We can use and share your health information to run our practice, improve your care, and contact you when necessary. Example: We use health information about you to manage your treatment and services.`,
        es: `Podemos usar y compartir su información de salud para administrar nuestra práctica, mejorar su atención y comunicarnos con usted cuando sea necesario. Ejemplo: usamos su información de salud para gestionar su tratamiento y servicios.`,
      },
      { t: 'h3', en: `Bill for your services`, es: `Para facturar sus servicios` },
      {
        t: 'p',
        en: `We can use and share your health information to bill and get payment from health plans or other entities. Example: We give information about you to your health insurance plan so it will pay for your services.`,
        es: `Podemos usar y compartir su información de salud para facturar y recibir pagos de planes de salud u otras entidades. Ejemplo: proporcionamos información sobre usted a su plan de seguro médico para que pague por sus servicios.`,
      },
      { t: 'h3', en: `How else can we use or share your health information?`, es: `¿De qué otra manera podemos usar o compartir su información de salud?` },
      {
        t: 'p',
        en: `We are allowed or required to share your information in other ways – usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes.`,
        es: `Se nos permite o se nos exige compartir su información de otras maneras, generalmente de formas que contribuyen al bien público, como la salud pública y la investigación. Debemos cumplir con muchas condiciones establecidas por la ley antes de poder compartir su información para estos fines.`,
      },
      {
        t: 'p',
        en: `In all cases, including those listed below, if we have substance use disorder patient records about you, subject to 42 CFR part 2, we cannot use or share information in those records in civil, criminal, administrative, or legislative investigations or proceedings against you without (1) your consent or (2) a court order and a subpoena.`,
        es: `En todos los casos, incluidos los que se enumeran a continuación, si tenemos registros suyos de paciente por trastorno por consumo de sustancias, sujetos a la parte 2 del título 42 del CFR, no podemos usar ni compartir la información de esos registros en investigaciones o procedimientos civiles, penales, administrativos o legislativos en su contra sin (1) su consentimiento o (2) una orden judicial y una citación.`,
      },
      {
        t: 'ul',
        en: [
          `Help with public health and safety issues – such as preventing disease, helping with product recalls, reporting adverse reactions to medications, reporting suspected abuse, neglect, or domestic violence, and preventing or reducing a serious threat to anyone's health or safety`,
          `Do research – we can use or share your information for health research`,
          `Comply with the law – we will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we're complying with federal privacy law`,
          `Respond to organ and tissue donation requests – we can share health information about you with organ procurement organizations`,
          `Work with a medical examiner or funeral director – we can share health information with a coroner, medical examiner, or funeral director when an individual dies`,
          `Address workers' compensation, law enforcement, and other government requests – for workers' compensation claims, for law enforcement purposes or with a law enforcement official, with health oversight agencies for activities authorized by law, and for special government functions such as military, national security, and presidential protective services`,
          `Respond to lawsuits and legal actions – we can share health information about you in response to a court or administrative order, or in response to a subpoena`,
        ],
        es: [
          `Ayudar con asuntos de salud y seguridad pública, como prevenir enfermedades, colaborar con retiros de productos del mercado, informar reacciones adversas a medicamentos, denunciar sospechas de abuso, negligencia o violencia doméstica, y prevenir o reducir una amenaza grave para la salud o seguridad de cualquier persona`,
          `Realizar investigaciones: podemos usar o compartir su información para investigaciones de salud`,
          `Cumplir con la ley: compartiremos información sobre usted si las leyes estatales o federales lo exigen, incluso con el Departamento de Salud y Servicios Humanos si desea verificar que cumplimos con la ley federal de privacidad`,
          `Responder a solicitudes de donación de órganos y tejidos: podemos compartir su información de salud con organizaciones de obtención de órganos`,
          `Trabajar con un médico forense o director funerario: podemos compartir información de salud con un forense, médico examinador o director funerario cuando una persona fallece`,
          `Atender solicitudes de compensación laboral, de las fuerzas del orden y de otras entidades gubernamentales: para reclamos de compensación laboral, con fines policiales o con un funcionario del orden público, con agencias de supervisión sanitaria para actividades autorizadas por ley, y para funciones gubernamentales especiales como el ejército, la seguridad nacional y los servicios de protección presidencial`,
          `Responder a demandas y acciones legales: podemos compartir su información de salud en respuesta a una orden judicial o administrativa, o en respuesta a una citación`,
        ],
      },
      { t: 'h2', en: `Our Responsibilities`, es: `Nuestras Responsabilidades` },
      {
        t: 'ul',
        en: [
          `We are required by law to maintain the privacy and security of your protected health information.`,
          `We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.`,
          `We must follow the duties and privacy practices described in this notice and give you a copy of it.`,
          `We will not use or share your information other than as described in this notice unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.`,
        ],
        es: [
          `La ley nos exige mantener la privacidad y la seguridad de su información de salud protegida.`,
          `Le informaremos de inmediato si ocurre una filtración que pueda haber comprometido la privacidad o la seguridad de su información.`,
          `Debemos cumplir con los deberes y las prácticas de privacidad descritos en este aviso y entregarle una copia del mismo.`,
          `No usaremos ni compartiremos su información de manera distinta a la descrita en este aviso, a menos que usted nos lo autorice por escrito. Si nos da su autorización, puede cambiar de opinión en cualquier momento. Infórmenos por escrito si cambia de opinión.`,
        ],
      },
      {
        t: 'p',
        en: `For more information see: www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.`,
        es: `Para obtener más información, visite: www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.`,
      },
      { t: 'h2', en: `Changes to the Terms of this Notice`, es: `Cambios a los Términos de este Aviso` },
      {
        t: 'p',
        en: `We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our office, and on our web site.`,
        es: `Podemos cambiar los términos de este aviso, y los cambios se aplicarán a toda la información que tengamos sobre usted. El nuevo aviso estará disponible a solicitud, en nuestra oficina y en nuestro sitio web.`,
      },
      { t: 'h2', en: `Contact Us`, es: `Contáctenos` },
      {
        t: 'p',
        en: `Vintage Family Medicine and Pediatrics, 860 Hebron Parkway, Suite 203, Lewisville, TX 75057-5143. Phone: (972) 315-5144. Fax: (469) 530-9200.`,
        es: `Vintage Family Medicine and Pediatrics, 860 Hebron Parkway, Suite 203, Lewisville, TX 75057-5143. Teléfono: (972) 315-5144. Fax: (469) 530-9200.`,
      },
    ],
  },
};
