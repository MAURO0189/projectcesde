import React from "react";
import ChatBot from "./ChatBot";
import Nav from "./Nav";
import "../assets/style/preguntas.css";
import Footer from "./Footer";

function PreguntasF() {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="titleMain">FAQs​</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h4 className="subtitle">
              ¿Qué documentos se necesitan para expedir un Seguro de
              Cumplimiento de SURA?
            </h4>
            Personas jurídicas: <br />
            <br />
            • Certificado de existencia y representación <br />
            legal expedido por la Cámara de Comercio correspondiente, con 30
            días o menos de anterioridad. <br />
            • Registro Único Tributario (RUT). <br />
            •Información financiera de los dos últimos años contables, con corte
            al 31 de diciembre, la cual debe contener: balance general y estado
            de pérdidas y ganancias con sus respectivas notas.
            <br /> • Récord de experiencia en obras o Registro Único de
            Proponentes (RUP). <br />• Firma de pagaré en blanco con su
            respectiva carta de instrucción por parte del representante legal de
            la entidad a afianzar.
            <br /> • Diligenciamiento del formulario de conocimiento del cliente
            (Sarlaft). <br />• Contrato o documento base de expedición, en el
            cual se debe analizar: objeto, plazo, valor, obligaciones, lugar
            donde se desarrolla, garantías, claridad en las cláusulas, etc.
            <br />
            <br />
            Personas naturales: <br />
            <br />• Fotocopia de la cédula de ciudadanía. • RUT (Registro Único
            Tributario).
            <br /> • Copia de la declaración de renta o copia del impuesto
            predial o extractos bancarios de los últimos tres meses. Esto con el
            fin de validar la capacidad financiera actualizada del afianzado.
            <br /> • Hoja de vida con su certificado de experiencia en obras o
            contratos ejecutados y en ejecución.
            <br /> • Firma de pagaré en blanco con su respectiva carta de
            instrucción como garantía del seguro a expedir.
            <br />
            • Diligenciamiento del formulario de conocimiento del cliente
            (Sarlaft).
            <br /> • Contrato o documento de expedición, en el cual se debe
            analizar: objeto, plazo, valor, obligaciones, lugar donde se
            desarrolla, garantías, claridad en las cláusulas, etc. <br />
            <br />
            Otros documentos adicionales para personas naturales y jurídicas:
            <br /> • RUT (Registro Único Tributario).
            <br /> • Experiencia en otro tipo de objetos contractuales.
            <br /> • Declaración de renta.
            <br />
            <br />
            <h4 className="subtitle">
              ¿SURA puede emitir solo seguros poscontractuales de un contrato?
            </h4>
            <br />
            No es viable proceder con emisión solo de seguros poscontractuales,
            por lo que es necesario tener conocimiento del riesgo desde su
            inicio y haber expedido los seguros contractuales.
            <br />
            <h4 className="subtitle">
              Si un contrato contempla un pago anticipado superior al 50 %, ¿se
              puede otorgar el seguro?
            </h4>
            Por política de la Compañía no es viable la suscripción de anticipos
            superiores al 50 %. Además, la política establece que SURA puede
            garantizar máximo el 50 % teniendo en cuenta el riesgo de este
            amparo y los porcentajes normales que las empresas entregan a título
            de anticipo. Sin embargo, se podría revisar de conformidad con el
            monto y el tipo de cliente a partir de la definición de cómo el
            tomador y/o afianzado manejarán los dineros que han sido entregados
            por concepto de anticipo, si estos van a ir a una fiducia y la
            manera como se harán los desembolsos (con la autorización de un
            interventor).
            <br />
            <h4 className="subtitle">
              El tiempo adicional (periodo de liquidación) que se solicita en
              las garantías, ¿se cuenta como plazo del contrato?
            </h4>
            El tiempo adicional que se solicita en la vigencia de las coberturas
            no se debe contar como plazo del contrato. Este tiempo es para la
            liquidación del mismo. Cualquier ampliación del plazo contractual se
            debe legalizar con un otrosí al contrato y debe ser notificado a
            SURA de manera inmediata. <br />
            <h4 className="subtitle">
              ¿Cuánto vale el seguro para mi carro/moto/bicicleta?
            </h4>
            El valor a pagar varía de acuerdo a las coberturas contratadas,
            ciudad de circulación y marca línea del tipo de vehículo que se
            desea asegurar. Para conocer el valor se debe solicitar una
            cotización a través de www.suraenlinea.com o con uno de nuestros
            asesores. <br />
            <br />
            <h4 className="subtitle">¿Qué es el deducible de una póliza?</h4>
            Es el valor que le corresponde pagar al asegurado para cada una de
            las coberturas contratadas. <br />
            <br />
            <h4 className="subtitle">
              ¿Qué coberturas tienen los planes de movilidad que ofrece SURA?
            </h4>
            • La cobertura básica: daños a terceros (cubre daños a bienes, a
            terceras personas y gastos de defensa judicial en proceso penal y
            civil). <br />• Coberturas opcionales: pérdida total y parcial por
            daños, pérdida total y parcial por hurto, gastos de transporte por
            pérdida total, carro de reemplazo, renta diaria por hospitalización
            y asistencia en viaje. Las coberturas varían de acuerdo al tipo de
            carro/moto/bici que se quiera asegurar y al plan contratado.
          </div>
        </div>
      </div>
      <ChatBot />
      <Footer />
    </>
  );
}

export default PreguntasF;
