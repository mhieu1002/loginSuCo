import React, { useState } from "react";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  ));

  Iconify.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object,
    width: PropTypes.number,
  };
  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: 1, p: 20 }}
      >
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 320,
            borderRadius: "15px",
            boxShadow: 5,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ĐĂNG NHẬP
          </Typography>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "black" }}>
              Đăng nhập tài khoản của bạn
            </Typography>
          </Divider>

          <Stack spacing={3}>
            <TextField name="username" label="Tên đăng nhập" />

            <TextField
              name="password"
              label="Mật khẩu"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <Iconify
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
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
            sx={{
              minHeight: "50px",
              marginTop: "30px",
              backgroundColor: "#222222",
              color: "#E8E8E8",
              fontWeight: "600",
              textTransform: "none", // Tắt chữ in hoa
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Đăng nhập
          </LoadingButton>
        </Card>
      </Stack>
    </Box>
  );
};

export default Login;
