import { MilongasPortada, Milongas } from './1_milongasCd';
import { RevistaAdesPortada, RevistaAdes } from './2_RevistaAdes';
import { EstatutosSintepPortada, EstatutosSintep } from './3_EstatutosSintep';
import { AffurVozYEco, AffurVozYEcoPortada } from './4_AffurRevistaVozYEco';
import { ComunaLibrillosPortada, ComunaLibrillos } from './5_ComunaLibrillos';
import { SintepCampaniaPortada, SintepCampania } from './8_SintepCampania';
import { AcrinSignoPortada, AcrinSigno } from './6_Acrin';
import { Zur1968Portada, Zur1968 } from './7_Zur_1968';
import {
  SintepInaguracion,
  SintepInaguracionPortada,
} from './9_Sintep_Inaguracion';
import { MilongasSodrePortada, MilongasSodre } from './10_Milongas_Sodre';
import { AicooPortada, Aicoo } from './11_Aicoo';
import { PalabrasAlChePortada, PalabrasAlChe } from './12_PalabrasAlChe';
import {
  ColectivoCatalejoPortada,
  ColectivoCatalejo,
} from './13_ColectivoCatalejo';
import {
  PartidoSocialistaPortada,
  PartidoSocialista,
} from './14_Partido_Socialista';

const EMAIL_URI = 'https://subte-api.herokuapp.com/sendcontactemail';
const AWS_LAMBDA_FN =
  'https://51rceu869k.execute-api.us-east-1.amazonaws.com/default/registerConverstarorios';

function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      ColectivoCatalejoPortada,
      SintepInaguracionPortada,
      AicooPortada,
      SintepCampaniaPortada,
      Zur1968Portada,
      ComunaLibrillosPortada,
      AffurVozYEcoPortada,
      EstatutosSintepPortada,
      AcrinSignoPortada,
      RevistaAdesPortada,
      MilongasPortada,
      PalabrasAlChePortada,
      MilongasSodrePortada,
      PartidoSocialistaPortada,
    ]);
  });
}

function getProjectDetail(name) {
  let project = null;

  //TODO: CONTROL null datatype

  switch (name) {
    case 'milongas-extremas':
      project = Milongas;
      break;
    case 'adesmontevideo':
      project = RevistaAdes;
      break;
    case 'estatutos-sintep':
      project = EstatutosSintep;
      break;
    case 'voz-y-eco':
      project = AffurVozYEco;
      break;
    case 'librillos-comuna':
      project = ComunaLibrillos;
      break;
    case 'acrin-signo':
      project = AcrinSigno;
      break;
    case 'zur-1968':
      project = Zur1968;
      break;
    case 'sintep-campania':
      project = SintepCampania;
      break;
    case 'sintep-inaguracion':
      project = SintepInaguracion;
      break;
    case 'aicoo-signo':
      project = Aicoo;
      break;
    case 'palabras-al-che':
      project = PalabrasAlChe;
      break;
    case 'milongas-sodre':
      project = MilongasSodre;
      break;
    case 'web-colectivo-catalejo':
      project = ColectivoCatalejo;
      break;
    case 'partido-socialista-spot':
      project = PartidoSocialista;
      break;
    default:
      project = null;
      break;
  }

  return new Promise((resolve) => {
    resolve(project);
  });
}

const sendContactEmail = async ({ email, tel, name, text, subject }) => {
  const emailData = {
    from: email,
    tel: tel !== '' ? tel : undefined,
    name,
    text,
    subject,
  };

  return await sendPostRequest(EMAIL_URI, emailData);
};

export const sendConvesatoriosInscripcion = async ({
  nombre,
  organizacion,
  mail,
  pregunta,
}) => {
  const data = {
    nombre,
    organizacion,
    mail,
    pregunta,
  };
  try {
    const response = await sendPostRequest(AWS_LAMBDA_FN, data);
    return JSON.parse(response.body);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const sendPostRequest = async (URI, data) => {
  const response = await fetch(URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export { getProjects, getProjectDetail, sendContactEmail };
