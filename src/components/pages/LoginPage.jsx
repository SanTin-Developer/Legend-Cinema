import { useState } from "react";
import { ButtonLogin } from "../UI/ButtonLogin";
import Input from "../UI/Input";
import { Link, Links } from "react-router-dom";

import Image from "../UI/hallCinema.png";

import { User, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState("username");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-[75vh] mt-12 border-[1px] bg-slate-900/50 border-gray-500 rounded-sm flex">
      {/* Left side - Gaming venue image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent z-10" />
        <img
          src={Image}
          alt="Legend Cinema Logo"
          className="w-[67vh] h-auto object-contain rounded-b-sm"
        />
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <h1 className="text-2xl font-semibold text-white">Log In</h1>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500" />
              </div>
              <Link to="/joinnow2">
                <h2 className="text-2xl font-semibold text-gray-500">
                  Sign Up
                </h2>
              </Link>
            </div>

            <p className="text-white text-sm font-medium">
              You can use your phone number or username
            </p>
          </div>

          {/* Login method toggle */}
          <div className="flex rounded-full bg-slate-800 p-1">
            <button
              onClick={() => setLoginMethod("username")}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
                loginMethod === "username"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Username
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
                loginMethod === "phone"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Phone Number
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Username/Phone input */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">
                {loginMethod === "username" ? "Username" : "Phone Number"}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type={loginMethod === "username" ? "text" : "tel"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                  placeholder={
                    loginMethod === "username"
                      ? "Enter username"
                      : "Enter phone number"
                  }
                />
              </div>
            </div>

            {/* Password input */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Continue button */}
            <ButtonLogin
              className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-full text-base font-medium"
              onClick={() =>
                console.log("Login attempt:", {
                  loginMethod,
                  username,
                  password,
                })
              }
            >
              Continue
            </ButtonLogin>
          </div>
        </div>
      </div>
    </div>
  );
}
