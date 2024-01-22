let marsutai = [
    {
      Iš_į: "Vilnius - Kaunas",
      atstumas: 100,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "1.20",
    },
    {
      Iš_į: "Vilnius - Klaipeda",
      atstumas: 300,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "3.40",
    },
    {
      Iš_į: "Vilnius - Mazeikiai",
      atstumas: 200,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "2.46",
    },
    {
      Iš_į: "Vilnius - Priekule",
      atstumas: 50,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: ".30",
    },
    {
      Iš_į: "Vilnius - Varsuva",
      atstumas: 350,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "3.20",
    },
    {
      Iš_į: "Vilnius - Vydmantai",
      atstumas: 350,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "3.20",
    },
    {
      Iš_į: "Vilnius - Kretinga",
      atstumas: 550,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "25.20",
    },
    {
      Iš_į: "Vilnius - Olandija",
      atstumas: 1000,
      Išvykimo_data_ir_laikas: "2024-01-22 13:4",
      Kelionės_trukmė_valandomis_ir_minutėmis: "24.20",
    },
  ];
  // Funkcija, kuri gražins skaičių ilgiausio maršruto ir išspaudins info į consolę.
  function ilgiausiasMarsrutas(stotys) {
    let stotSarasas = [...stotys];
    let ilgiausias = {
      Iš_į: undefined,
      atstumas: 0,
      Išvykimo_data_ir_laikas: undefined,
      Kelionės_trukmė_valandomis_ir_minutėmis: undefined,
    };
  
    stotSarasas.forEach((item) => {
      if (item.atstumas >= ilgiausias.atstumas) {
        ilgiausias.atstumas = item.atstumas;
        ilgiausias.Iš_į = item.Iš_į;
        ilgiausias.Kelionės_trukmė_valandomis_ir_minutėmis =
          item.Kelionės_trukmė_valandomis_ir_minutėmis;
        ilgiausias.Išvykimo_data_ir_laikas = item.Išvykimo_data_ir_laikas;
      }
    });
    console.log("Duomenys apie ilgiausią maršrutą");
    console.log(ilgiausias);
    console.log("=============================================");
    console.log("=============================================");
    return ilgiausias.atstumas;
  }
  
  ilgiausiasMarsrutas(marsutai);
  // Funkcija, kuri gražins skaičių trumpiausio maršruto ir išspaudins info į consolę.
  function trumpiausiasAtstumas(stotys) {
    let stotSarasas = [...stotys];
    let trumpiausias = {
      Iš_į: undefined,
      atstumas: stotSarasas[0].atstumas,
      Išvykimo_data_ir_laikas: undefined,
      Kelionės_trukmė_valandomis_ir_minutėmis: undefined,
    };
  
    stotSarasas.forEach((item) => {
      if (trumpiausias.atstumas > item.atstumas) {
        trumpiausias.atstumas = item.atstumas;
        trumpiausias.Iš_į = item.Iš_į;
        trumpiausias.Kelionės_trukmė_valandomis_ir_minutėmis =
          item.Kelionės_trukmė_valandomis_ir_minutėmis;
        trumpiausias.Išvykimo_data_ir_laikas = item.Išvykimo_data_ir_laikas;
      }
    });
    console.log("Duomenys apie trumpiausią maršrutą");
    console.log(trumpiausias);
    console.log("=============================================");
    console.log("=============================================");
    return trumpiausias.atstumas;
  }
  
  trumpiausiasAtstumas(marsutai);
  // Funkcija, kuri gražins sąrašą objektų maršrutų, kurie trunka daugiau nei parą ir išspaudins info į consolę.
  function ilgiauNeiPara(stotys) {
    let stotSarasas = [...stotys];
    let pariniaiMarsrutai = [];
  
    stotSarasas.forEach((item) => {
      if (item.Kelionės_trukmė_valandomis_ir_minutėmis > 24) {
        pariniaiMarsrutai.push(item);
      }
    });
    console.log("Duomenys apie parinius maršrutus");
    console.log(pariniaiMarsrutai);
    console.log("=============================================");
    console.log("=============================================");
    return pariniaiMarsrutai;
  }
  
  ilgiauNeiPara(marsutai);