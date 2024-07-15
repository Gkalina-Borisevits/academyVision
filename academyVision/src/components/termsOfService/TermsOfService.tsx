import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';


const TermsOfService: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="link" onClick={handleShow} style={{ color: '#FFDEAD', textDecoration: 'none', fontSize: '12px', marginTop: '-10px' }}>
      DATENSCHUTZERKLÄRUNG
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>DATENSCHUTZERKLÄRUNG</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>1. Datenschutz auf einen Blick<br />
          Allgemeine Hinweise<br />
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
          Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.<br />
          Datenerfassung auf dieser Website<br />
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?<br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.<br />
          Wie erfassen wir Ihre Daten?<br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
          Daten handeln, die Sie in ein Kontaktformular eingeben.<br />

          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
          Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit

          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.<br />
          Wofür nutzen wir Ihre Daten?<br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
          Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.<br />

          <br />
          Welche Rechte haben Sie bezüglich Ihrer Daten?<br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.<br />
          Analyse-Tools und Tools von Drittanbietern<br />
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
          allem mit sogenannten Analyseprogrammen.
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
          Datenschutzerklärung.<br />
          2. Hosting<br />
          Externes Hosting<br />
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
          a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
          Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.<br />
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
          bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.<br />
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
          erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.<br />
          Wir setzen folgenden Hoster ein:<br />
          1blu AG<br />
          Riedemannweg 60<br />
          13627 Berlin<br />
          Deutschland<br />

          <br />
          3. Allgemeine Hinweise und Pflichtinformationen<br />
          Datenschutz<br />
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
          dieser Datenschutzerklärung.<br />

          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
          und zu welchem Zweck das geschieht.<br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.<br />
          Hinweis zur verantwortlichen Stelle<br />
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
          Dietrich und Körner Consulting GbR<br />
          Rothenburgstr. 25<br />
          12165 Berlin<br />
          Vertreten durch:<br />
          Caspar Dietrich<br />
          Anatolij Körner<br />
          Telefon: +493097983903<br />
          E-Mail: info@mindcept.de<br />
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
          die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
          entscheidet.<br />
          Speicherdauer<br />
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
          Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
          werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
          letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.<br />
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
          Website<br />
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
          nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff
          auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit
          widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
          verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
          berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.<br />
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten<br />
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen

          datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
          personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
          hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
          Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden
          herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
          ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
          Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.<br />
          Widerruf Ihrer Einwilligung zur Datenverarbeitung<br />
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.<br />
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
          Direktwerbung (Art. 21 DSGVO)<br />
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
          ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER
          BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
          PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF
          DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
          DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
          DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE
          BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
          KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE
          IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG
          DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
          RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).<br />
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
          WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER
          DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
          PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
          DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).<br />
          Beschwerderecht bei der zuständigen Aufsichtsbehörde<br />
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
          verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.<br />
          Recht auf Datenübertragbarkeit<br />
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
          automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.<br />
          Auskunft, Löschung und Berichtigung<br />
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
          Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
          zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.<br />
          Recht auf Einschränkung der Verarbeitung<br />
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:<br />
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
          in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.<br />
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt
          der Löschung die Einschränkung der Datenverarbeitung verlangen.<br />
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
          Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
          Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.<br />
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
          Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
          überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.<br />
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
          ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen
          Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.<br />
          SSL- bzw. TLS-Verschlüsselung<br />
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
          Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
          Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
          „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.<br />
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
          von Dritten mitgelesen werden.<br />
          Verschlüsselter Zahlungsverkehr auf dieser Website<br />
          Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten
          (z. B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung
          benötigt.<br />
          Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt
          ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen
          Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol
          in Ihrer Browserzeile.<br />
          Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von
          Dritten mitgelesen werden.<br />
          Widerspruch gegen Werbe-E-Mails<br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
          ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
          der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
          Werbeinformationen, etwa durch Spam-E-Mails, vor.<br />
          <br />
          4. Datenerfassung auf dieser Website<br />
          Cookies<br />
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
          Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
          werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.<br />
          Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie
          unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter
          Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von
          Zahlungsdienstleistungen).<br />
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
          Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
          Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.<br />
          Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur
          Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die
          Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
          Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
          von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
          Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden
          Cookies ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
          jederzeit widerrufbar.<br />
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
          Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
          ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
          Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.<br />
          Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber
          im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.<br />
          Server-Log-Dateien<br />
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
          Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:<br />
          Browsertyp und Browserversion<br />
          verwendetes Betriebssystem<br />
          Referrer URL<br />
          Hostname des zugreifenden Rechners<br />
          Uhrzeit der Serveranfrage<br />
          IP-Adresse<br />
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.<br />
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
          ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
          hierzu müssen die Server-Log-Files erfasst werden.<br />
          Kontaktformular<br />
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
          und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.<br />
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
          der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br />
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
          (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
          insbesondere Aufbewahrungsfristen – bleiben unberührt.<br />
          Anfrage per E-Mail, Telefon oder Telefax<br />
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
          bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br />
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
          der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br />
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
          (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
          insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.<br />
          Registrierung auf dieser Website<br />
          Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu
          eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes,
          für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig
          angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.<br />
          Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen
          wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.<br />
          Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der
          Durchführung des durch die Registrierung begründeten Nutzungsverhältnisses und ggf. zur Anbahnung
          weiterer Verträge (Art. 6 Abs. 1 lit. b DSGVO).<br />
          Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website
          registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.<br />
          Kommentarfunktion auf dieser Website<br />
          Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt
          der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen
          gewählte Nutzername gespeichert.<br />
          Speicherung der IP-Adresse<br />
          Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir
          Kommentare auf dieser Website nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle
          von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.<br />
          Abonnieren von Kommentaren<br />
          Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine
          Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können diese
          Funktion jederzeit über einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens von
          Kommentaren eingegebenen Daten werden in diesem Fall gelöscht; wenn Sie diese Daten für andere Zwecke
          und an anderer Stelle (z. B. Newsletterbestellung) an uns übermittelt haben, verbleiben die jedoch bei uns.<br />
          Speicherdauer der Kommentare<br />
          Die Kommentare und die damit verbundenen Daten (z. B. IP-Adresse) werden gespeichert und verbleiben auf
          dieser Website, bis der kommentierte Inhalt vollständig gelöscht wurde oder die Kommentare aus
          rechtlichen Gründen gelöscht werden müssen (z. B. beleidigende Kommentare).<br />
          Rechtsgrundlage<br />
          Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie
          können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-
          Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
          unberührt.<br />
          <br />

5. Newsletter
Newsletterdaten<br />
<br />

Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-
Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der

angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere
Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für
den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf
Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.<br />
Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen
unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.<br />
Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger
Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit
anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des
Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der
Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.<br />
<br />


6. Plugins und Tools<br />
Google Maps<br />
Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon
House, Barrow Street, Dublin 4, Irland.<br />
Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist,
kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden.
Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte
und Schriftarten korrekt anzuzeigen.<br />
<br />

Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-
Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt

ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die

Einwilligung ist jederzeit widerrufbar.<br />
<br />
Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
Details finden Sie hier:<br />
https://privacy.google.com/businesses/gdprcontrollerterms/ und <br />
https://privacy.google.com/businesses/gdprcontrollerterms/sccs/.
Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <br />
https://policies.google.com/privacy?hl=de.
OpenStreetMap<br />
<br />
Wir nutzen den Kartendienst von OpenStreetMap (OSM). Anbieterin ist die Open-Street-Map Foundation
(OSMF), 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72 1JU, United Kingdom.
Wenn Sie eine Website besuchen, auf der OpenStreetMap eingebunden ist, werden u. a. Ihre IP-Adresse und
weitere Informationen über Ihr Verhalten auf dieser Website an die OSMF weitergeleitet. OpenStreetMap
speichert hierzu unter Umständen Cookies in Ihrem Browser oder setzt vergleichbare
Wiedererkennungstechnologien ein. <br />
Ferner kann Ihr Standort erfasst werden, wenn Sie dies in Ihren Geräteeinstellungen – z. B. auf Ihrem Handy
– zugelassen haben. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Details
entnehmen Sie der Datenschutzerklärung von OpenStreetMap unter folgendem Link:
https://wiki.osmfoundation.org/wiki/Privacy_Policy. <br />
<br />

Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung unserer Online-
Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein

berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen
im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
jederzeit widerrufbar.<br />
<br />
Quelle:
https://www.e-recht24.de</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <FaTimes />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TermsOfService;