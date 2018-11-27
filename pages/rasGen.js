import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import CalcAdv from '../components/calcAdv';
import AboutTechnology from '../components/rasgen/aboutTechnology';
import AboutTechnology2 from '../components/rasgen/aboutTechnology2';
import PotencialRynka from '../components/rasgen/potencialRynka';
import MirovayaPraktika from '../components/rasgen/mirovayaPraktika';
import Redzone from '../components/rasgen/redzone';

const RasGen = () => (
  <div>
    <Head
      title="Распределенная генерация"
      description="Распределенная генерация - новая современная технология!"
    />
    <AboutTechnology />
    <Redzone />
    <AboutTechnology2 />
    <MirovayaPraktika />
    <CalcAdv />
    <PotencialRynka />
  </div>
);

export default RasGen;
