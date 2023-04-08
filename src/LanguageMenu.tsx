import { Box, IconButton } from '@mui/material';
import i18n from './i18n';
import React from 'react';
const LanguageSelector: React.FC = () => {
  const handleChangeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: '8px',
      }}
    >
      <IconButton
        sx={{ padding: '4px' }}
        onClick={() => handleChangeLanguage('es')}
      >
        <Box
          component="img"
          src="https://flagcdn.com/w40/mx.png"
          alt="Mexico Flag"
          sx={{ width: '40px' }}
        />
      </IconButton>
      <IconButton
        sx={{ padding: '4px' }}
        onClick={() => handleChangeLanguage('en')}
      >
        <Box
          component="img"
          src="https://flagcdn.com/w40/us.png"
          alt="USA Flag"
          sx={{ width: '40px' }}
        />
      </IconButton>
      <IconButton
        sx={{ padding: '4px' }}
        onClick={() => handleChangeLanguage('de')}
      >
        <Box
          component="img"
          src="https://flagcdn.com/w40/de.png"
          alt="Germany Flag"
          sx={{ width: '40px' }}
        />
      </IconButton>
      <IconButton
        sx={{ padding: '4px' }}
        onClick={() => handleChangeLanguage('zh')}
      >
        <Box
          component="img"
          src="https://flagcdn.com/w40/cn.png"
          alt="Chinese Flag"
          sx={{ width: '40px' }}
        />
      </IconButton>
      <IconButton
        sx={{ padding: '4px' }}
        onClick={() => handleChangeLanguage('pt')}
      >
        <Box
          component="img"
          src="https://flagcdn.com/w40/br.png"
          alt="Portuguese Flag"
          sx={{ width: '40px' }}
        />
      </IconButton>
      <IconButton
        sx={{ padding: '4px' }}
        onClick={() => handleChangeLanguage('fr')}
      >
        <Box
          component="img"
          src="https://flagcdn.com/w40/fr.png"
          alt="France Flag"
          sx={{ width: '40px' }}
        />
      </IconButton>
    </Box>
  );
};

export default LanguageSelector;
