import { MilongasPortada, Milongas } from './1_milongasCd'
import { RevistaAdesPortada, RevistaAdes } from './2_RevistaAdes';
import { EstatutosSintepPortada, EstatutosSintep } from './3_EstatutosSintep';
import { AffurVozYEco, AffurVozYEcoPortada } from './4_AffurRevistaVozYEco';
import { ComunaLibrillosPortada, ComunaLibrillos } from './5_ComunaLibrillos';
import { SintepCampaniaPortada, SintepCampania } from './8_SintepCampania';
import { AcrinSignoPortada, AcrinSigno } from './6_Acrin';
import { Zur1968Portada, Zur1968 } from './7_Zur_1968';
import { SintepInaguracion, SintepInaguracionPortada } from './9_Sintep_Inaguracion';
import { AicooPortada, Aicoo } from './11_Aicoo';
import { PalabrasAlChePortada, PalabrasAlChe } from './12_PalabrasAlChe';
import { MilongasSodrePortada, MilongasSodre } from './10_Milongas_Sodre';

const EMAIL_URI = 'https://subte-api.herokuapp.com/contactemail'

function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
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
    ])
  })
}

function getProjectDetail(name) {
  let project = null;

  //TODO: CONTROL null datatype

  switch (name) {
    case 'milongas-extremas':
      project = Milongas
      break;
    case 'adesmontevideo':
      project = RevistaAdes
      break;
    case 'estatutos-sintep':
      project = EstatutosSintep
      break;
    case 'voz-y-eco':
      project = AffurVozYEco
      break;
    case 'librillos-comuna':
      project = ComunaLibrillos
      break;
    case 'acrin-signo':
      project = AcrinSigno
      break;
    case 'zur-1968':
      project = Zur1968
      break;
    case 'sintep-campania':
      project = SintepCampania
      break;
    case 'sintep-inaguracion':
      project = SintepInaguracion
      break;
    case 'aicoo-signo':
      project = Aicoo
      break;
    case 'palabras-al-che':
      project = PalabrasAlChe
      break;
    case 'milongas-sodre':
      project = MilongasSodre
      break;
    default:
      project = null
      break;
  }

  return new Promise((resolve) => {
    resolve(project)
  })
}

const sendContactEmail = async ({ email, tel, name, text }) => {

  const emailData = {
    from: email,
    tel: tel !== '' ? tel : undefined,
    name,
    text
  }

  return await sendPostRequest(EMAIL_URI, emailData)
}

const sendPostRequest = async (URI, data) => {

  const response = await fetch(URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}

const makeGetRequest = async (URI, data) => {

  const response = await fetch(URI, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}

export {
  getProjects,
  getProjectDetail,
  sendContactEmail,
  sendPostRequest,
  makeGetRequest
}