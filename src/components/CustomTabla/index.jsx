import React from 'react'

const CustomTheMatchProject = () => {
  const tables = [
    {
      title: 'Table 1',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $100.000 + 100 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Ruleta, Blackjack',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Licencia de la MGA, atención al cliente en español',
        },
        {
          feature: '❌ Desventajas',
          detail: 'No tiene programa de lealtad, sin app móvil',
        },
      ],
    },
    {
      title: 'Table 2',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $200.000 + 50 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Rasca y Gana, Video Póker',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Tiene Club VIP, Licencia de la MGA',
        },
        {
          feature: '❌ Desventajas',
          detail:
            'La aplicación no está disponible para iOS, no ofrece demos gratis',
        },
      ],
    },
    {
      title: 'Table 3',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $200.000 + 120 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Blackjack, Sic Bo',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Tiene Club VIP, App móvil para iOS y Android',
        },
        {
          feature: '❌ Desventajas',
          detail:
            'La aplicación no está disponible para iOS, no ofrece demos gratis, pocas promociones',
        },
      ],
    },
    {
      title: 'Table 4',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: '100 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Blackjack, Ruleta en vivo.',
        },
        {
          feature: '✅ Ventajas',
          detail:
            'Tiene demos gratis para los juegos, métodos de pagos seguros.',
        },
        {
          feature: '❌ Desventajas',
          detail:
            'Pocas promociones disponibles, el chat en vivo no funciona correctamente.',
        },
      ],
    },
    {
      title: 'Table 5',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $750.000 + 100 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Blackjack, Baccarat',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Versión móvil, sección de apuestas deportivas',
        },
        {
          feature: '❌ Desventajas',
          detail:
            'No cuenta con demos gratis, la página tarda un poco en cargar',
        },
      ],
    },
    {
      title: 'Table 6',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $600.000 + 100 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Póker en Vivo, Ruleta',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Puedes jugar gratis, Club VIP, Versión móvil',
        },
        {
          feature: '❌ Desventajas',
          detail:
            'No hay mucha variedad de métodos de pago, la atención al cliente no es en español',
        },
      ],
    },
    {
      title: 'Table 7',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $400.000 + 250 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Póker, Ruleta, Keno, Tragamonedas',
        },
        {
          feature: '✅ Ventajas',
          detail:
            'Buenas promociones, se puede jugar gratis, Licencia de Curazao',
        },
        {
          feature: '❌ Desventajas',
          detail: 'No cuenta con muchas opciones para retirar las ganancias.',
        },
      ],
    },
    {
      title: 'Table 8',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $2.000.000 + 20 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Póker, Baccarat',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Cuenta con demos gratis, varios métodos de pagos',
        },
        {
          feature: '❌ Desventajas',
          detail: 'La atención al cliente es un poco lenta',
        },
      ],
    },
    {
      title: 'Table 9',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $960.000 + 50 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Rasca y Gana, Video Póker, Blackjack',
        },
        {
          feature: '✅ Ventajas',
          detail:
            'Tragamonedas con grandes botes, atención al cliente disponible 24/7',
        },
        {
          feature: '❌ Desventajas',
          detail: 'Pocos juegos, no tiene app móvil',
        },
      ],
    },
    {
      title: 'Table 10',
      tableData: [
        {
          feature: '💰 Bono de Bienvenida',
          detail: 'CLP $300.000 + 100 giros gratis',
        },
        {
          feature: '🎰 Juegos Disponibles',
          detail: 'Tragamonedas, Ruleta, Blackjack',
        },
        {
          feature: '✅ Ventajas',
          detail: 'Cuenta con promoción de reembolso, tiene una app móvil',
        },
        {
          feature: '❌ Desventajas',
          detail: 'No hay muchas promociones',
        },
      ],
    },
  ]

  return (
    <>
      <style>
        {`
          .container {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 1.25rem;
          }
          .tableclass {
            width: 100%;
            table-layout: auto;
            border-collapse: collapse;
            border: 1px solid #d1d5db;
          }
          .thclass, .tdclass {
            border: 1px solid #d1d5db;
            padding: 0.5rem 1rem;
            color: #000;
            font-weight: bold;
          }
        `}
      </style>
      {tables.map((table, tableIndex) => (
        <div className="container" key={tableIndex}>
          <h2>{table.title}</h2>
          <table className="tableclass">
            <thead>
              <tr>
                <th className="thclass">Características</th>
                <th className="thclass">Detalles</th>
              </tr>
            </thead>
            <tbody>
              {table.tableData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="tdclass">{item.feature}</td>
                  <td className="tdclass">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  )
}

export default CustomTheMatchProject
