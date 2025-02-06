"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Kepala Sekolah", value: 12.5 },
  { name: "PPDB (Penerimaan Peserta Didik Baru)", value: 12.5 },
  { name: "Hubin (Hubungan Industri)", value: 12.5 },
  { name: "Kesiswaan", value: 12.5 },
  { name: "Sarpra (Sarana dan Prasarana)", value: 12.5 },
  { name: "Kurikulum", value: 12.5 },
  { name: "Keuangan / Administrasi", value: 12.5 },
  { name: "SDM (Sumber Daya Manusia)", value: 12.5 },
];

const COLORS = [
  "#0B4F9E", "#7857B8", "#52B3E6", "#FF726E", 
  "#FFD24C", "#820000", "#526983", "#4BB543"
];

export default function PieChartComponent() {
  return (
    <div className="mt-[100px] ml-[320px]">
      <div className="flex">
        <PieChart width={400} height={400}>
          <Pie
            style={{border:""}}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            strokeWidth={2}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="bg-[#dcdce1] ml-24 border rounded-xl py-16 px-[200px] shadow-xl ">
            <div className="absolute text-base ml-[-170px] mt-[-29px]">
            <p className="flex font-medium"><div className="bg-[#11409a] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>Kepala Sekolah</p>
            <p className="flex font-medium mt-5"><div className="bg-[#44cf63] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>SDM (Sumber Daya Manusia)</p>
            <p className="flex font-medium mt-5"><div className="bg-[#5a738e] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>Keuangan / Administrasi</p>
            <p className="flex font-medium mt-5"><div className="bg-[#800000] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>Kurikulum</p>
            <p className="flex font-medium mt-5"><div className="bg-[#ff6f61] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>Kesiswaan</p>
            <p className="flex font-medium mt-5"><div className="bg-[#ffce3a] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>Sarpra (Sarana dan Prasarana)</p>
            <p className="flex font-medium mt-5"><div className="bg-[#52c7ef] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>Hubin (Hubungan Industri)</p>
            <p className="flex font-medium mt-5"><div className="bg-[#906fcc] mr-5 mt-[5px] mb-[5px] px-[7px] rounded-sm"/>PPDB (Penerimaan Peserta Didik Baru)</p>
            </div>
        </div>
      </div>
    </div>
  );
}
