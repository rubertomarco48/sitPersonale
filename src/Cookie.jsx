

import { useCookies } from 'react-cookie';

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);

  const handleAccept = () => {
    setCookie('cookieConsent', true, { path: '/' });
  };

  return (
    <div id='cook'>
      {!cookies.cookieConsent && (
        <div className=' gap-4 w-4/5 bg-white rounded-xl flex justify-center items-center'>
          <p>Questo sito utilizza i cookie. Leggi la nostra <a href="/cookie-policy" className='policy'>Cookie Policy</a>.</p>
          <button className=' bg-green-600 p-4 text-slate-100 rounded-xl bottoneCookie' onClick={handleAccept}>Accetta i cookie</button>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;