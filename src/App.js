import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import theme from './theme';
import { GlobalStyle } from './components/GlobalStyle';
import { Viewport } from './components/Viewport';
import { TrackCard } from './components/TrackCard';
import { useTrack, useTrackSocket } from './hooks/track';

const App = () => {
  const [track, setTrack] = useTrack();

  useTrackSocket(setTrack);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <script type="text/javscript">
            {`(function(d) {
                  var config = {
                      kitId: 'aaw7wzt',
                      scriptTimeout: 3000,
                      async: true
                  },
                  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);`}
          </script>
        </Helmet>
        <GlobalStyle />
        <Viewport>
          <TrackCard {...track} />
        </Viewport>
      </>
    </ThemeProvider>
  );
};

export default App;
