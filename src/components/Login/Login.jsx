import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from '../iconify/iconify';

export default function LoginView() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        // ...bgGradient({ /* your bgGradient styles here */ }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 320,
            borderRadius: '15px',
          }}
        >
          <Typography variant="h5" sx={{fontWeight: 600,}}>ĐĂNG NHẬP</Typography>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Đăng nhập tài khoản của bạn
            </Typography>
          </Divider>

          <Stack spacing={3}>
            <TextField
              name="username"
              label="Tên đăng nhập"
            />

            <TextField
              name="password"
              label="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="inherit"
            sx={{ marginTop: '30px' }}
          >
            Đăng nhập
          </LoadingButton>

          {/* Thêm nút đăng xuất (chỉ hiển thị khi đã đăng nhập) */}
        </Card>
      </Stack>
    </Box>
  );
}
