import React from 'react';
import Head from '../components/head';
import CalcAdv from '../components/calcAdv';
import AboutTechnology from '../components/rasgen/aboutTechnology';
import AboutTechnology2 from '../components/rasgen/aboutTechnology2';
import PotencialRynka from '../components/rasgen/potencialRynka';
import MirovayaPraktika from '../components/rasgen/mirovayaPraktika';
import Redzone from '../components/redzone';

const RasGen = () => (
  <div>
    <Head
      title="Распределенная генерация"
      description="Распределенная генерация - новая современная технология!"
    />
    <AboutTechnology />
    <Redzone>
      Единичная мощность КГПУ для распределенной генерации находится в диапазоне
      100 – 2000 кВт. Наибольшую эффективность показывают энергетические центры
      суммарной мощностью до 6 МВт. ГАЗОВЫЕ МАШИНЫ на протяжении более чем 10
      лет занимаются проектированием, изготовлением и внедрением оборудования
      малой энергетики на базе когенерационных газопоршневых установок с
      двигателями MAN, Liebherr, ЯМЗ.
    </Redzone>
    <AboutTechnology2 />
    <MirovayaPraktika />
    <CalcAdv />
    <PotencialRynka />
  </div>
);

export default RasGen;
