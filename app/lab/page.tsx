"use client";
import { useEffect, useState } from "react";

type Opt = { label: string; value: string | number };

const scales: Opt[]   = [{label:"0.96",value:0.96},{label:"1.00",value:1.00},{label:"1.04",value:1.04},{label:"1.08",value:1.08}];
const densities: Opt[]= [{label:"Compact",value:0.92},{label:"Default",value:1.00},{label:"Airy",value:1.08}];
const radii: Opt[]    = [{label:"sm",value:"var(--radius-sm)"},{label:"md",value:"var(--radius-md)"},{label:"lg",value:"var(--radius-lg)"},{label:"xl",value:"var(--radius-xl)"}];
const contrasts: Opt[]= [{label:"Low",value:0.97},{label:"Default",value:1.00},{label:"High",value:1.05}];
const themes: Opt[]   = [{label:"Dark",value:"theme-dark"},{label:"Light",value:"theme-light"}];

export default function Lab() {
  const [scale,setScale]=useState(1);
  const [density,setDensity]=useState(1);
  const [radius,setRadius]=useState("var(--radius-lg)");
  const [contrast,setContrast]=useState(1);
  const [theme,setTheme]=useState("theme-dark");

  useEffect(()=>{
    const root = document.documentElement;
    root.style.setProperty("--scale", String(scale));
    root.style.setProperty("--density", String(density));
    root.style.setProperty("--radius", String(radius));
    root.style.setProperty("--contrast", String(contrast));
  }, [scale,density,radius,contrast]);

  useEffect(()=>{
    const root = document.documentElement;
    root.classList.remove("theme-dark","theme-light");
    root.classList.add(theme);
    localStorage.setItem("hayekian.theme", theme);
  }, [theme]);

  useEffect(()=>{
    const t = localStorage.getItem("hayekian.theme");
    if (t) setTheme(t);
  }, []);

  return (
    <main className="min-h-dvh px-6 py-8">
      <h1 className="h1 mb-4">Look & Feel Lab</h1>
      <p className="lead mb-8 opacity-80">Adjust global style controls — changes apply instantly across real components.</p>

      <div className="grid gap-6 md:grid-cols-2">
        <Panel label="Scale"   options={scales}    value={scale}    onChange={v=>setScale(Number(v))}/>
        <Panel label="Density" options={densities} value={density}  onChange={v=>setDensity(Number(v))}/>
        <Panel label="Radius"  options={radii}     value={radius}   onChange={setRadius}/>
        <Panel label="Contrast"options={contrasts} value={contrast} onChange={v=>setContrast(Number(v))}/>
        <Panel label="Theme"   options={themes}    value={theme}    onChange={setTheme}/>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="h2 mb-2">Hero Example</h2>
          <p className="lead mb-4">Market intelligence for self-sovereign investors.</p>
          <div className="flex gap-3">
            <button className="btn btn-primary">See Example Output</button>
            <button className="btn">Secondary</button>
          </div>
        </div>

        <div className="card">
          <h2 className="h2 mb-2">Proof Card</h2>
          <p className="mb-4 opacity-80">ETF net inflow spike — descriptive caption, not promissory.</p>
          <div className="h-40 rounded-lg bg-[color:var(--surface)] border border-[color:var(--muted)]/20 grid place-items-center">
            <span className="text-sm opacity-70">[chart placeholder]</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function Panel({label, options, value, onChange}:{label:string; options:Opt[]; value:any; onChange:(v:any)=>void}) {
  return (
    <div className="card">
      <h3 className="mb-3 font-semibold">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map(o=>(
          <button
            key={String(o.value)}
            className={`btn ${String(value)===String(o.value) ? 'btn-primary' : ''}`}
            onClick={()=>onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
