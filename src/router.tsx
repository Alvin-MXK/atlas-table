import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AntdTable } from "./pages/antd-table";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AntdTable />} />
        <Route path="/antd" element={<AntdTable />} />
      </Routes>
    </BrowserRouter>
  );
}
