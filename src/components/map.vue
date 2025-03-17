<template>
  <div
    id="map"
    style="
      height: 800px;
      width: 80%;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    "
  ></div>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

onMounted(() => {
  const map = L.map("map").setView([-23.454163, -46.534096], 12); // Centralizado em Guarulhos

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [32, 45],
    iconAnchor: [16, 45],
    popupAnchor: [0, -45],
  });

  const locations = [
    {
      lat: -23.43768,
      lon: -46.40822,
      title:
        "Pimentas , Rua Muribeca, 262 Jardim Monte Alegre – CEP: 07273-330 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.44596,
      lon: -46.41033,
      title:
        "Jurema , Rua Olivanca, 221 A Jardim Carvalho – CEP: 07244-310 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.40358,
      lon: -46.41665,
      title:
        "Ponte Alta , Avenida José Rangel Filho, 933 Jardim Ponte Alta I – CEP: 07179-350 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.44523,
      lon: -46.46388,
      title:
        "Base Aérea , Rua Anastácio, 54 Conjunto Residencial Paes de Barros – CEP: 07182-200 Horário de Funcionamento: Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.31608,
      lon: -46.22531,
      title:
        "Santa Isabel , Av. Manoel Ferraz de Campos Salles, 642 – Parque São Benedito – CEP: 07500-000 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.49351,
      lon: -46.40044,
      title:
        "Itaim Paulista – São Paulo Rua Cordão de São Francisco, 847 – Vila Aimoré – CEP: 08190-000 Horário de Funcionamento: Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.38901,
      lon: -46.31482,
      title:
        "Arujá  , Av. dos Expedicionários, 975 Centro – CEP: 07400-490 Horário de Funcionamento: Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.38105,
      lon: -46.44425,
      title:
        "Fortaleza – Guarulhos Rua Ivanete de Menezes Lyra, 165 Jardim Fortaleza – CEP: 07153-605 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.39736,
      lon: -46.39662,
      title:
        "Santos Dummont – Guarulhos Estrada do Elenco, 4610 – Pq. Primavera – CEP: 07145-240 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.42396,
      lon: -46.34918,
      title:
        "Jardim América – Itaquaquecetuba R. José Alexandrino de Morães, 333 – Jardim Patricia, CEP: 08584-090 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.46341,
      lon: -46.40509,
      title:
        "Marcos Freire – Guarulhos Estr. do Sacramento, 1051 – Cidade Tupinambá – CEP: 07263-000 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.36479,
      lon: -46.026285,
      title:
        "Jacareí Rod. Henrique Eroles, 200 São João – CEP: 12322-540 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
    },
    {
      lat: -23.411242,
      lon: -46.403881,
      title:
        "Bonsucesso, Guarulhos Rua Tamotsu Iwasse, n° 3 - Vila Nova Bonsucesso, Guarulhos/SP - (Loja é dentro do Mercado Nagumo) Horário de Funcionamento: Segunda a Sábado das 08:00 às 20:00 | Feriados e domingo – Fechado",
    },
  ];

  locations.forEach((location) => {
    L.marker([location.lat, location.lon], { icon: customIcon })
      .addTo(map)
      .bindPopup(location.title);
  });

  map.on("click", (e) => {
    L.popup()
      .setLatLng(e.latlng)
      .setContent(
        `Coordenadas: ${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`
      )
      .openOn(map);
  });
});
</script>

<style scoped>
#map {
  background: #f0f0f0;
  transition: box-shadow 0.3s ease;
}

#map:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}
</style>
