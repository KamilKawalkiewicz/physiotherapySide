import React from 'react';
import "../style/Article.css"

import ArImg from "../img/imgArticles/Articles1.jpg"
import ArImg2 from "../img/imgArticles/Articles2.jpg"
import ArImg3 from "../img/imgArticles/Articles3.jpg"
import ArImg4 from "../img/imgArticles/Articles4.jpg"
import ArImg5 from "../img/imgArticles/Articles5.jpg"
import AImg from "../img/imgArticles/AnatomyImg.png"
const Article = props => {

    const checkID = () => {
        if (props.id === "BOL BARKU- JAK TO NAPRAWIC") {
            return (
                <article className="article">
                    <img src={ArImg} alt="Ból barku" />
                    <h2>BÓL BARKU- JAK TO NAPRAWIĆ</h2>
                    <p>Urazy barku powstają w bardzo różnorodny sposób i dotyczą:</p>
                    <ul>
                        <li>sportowców którzy próbowali „rzucić piłką”,</li>
                        <li>osoby która została pociągnięta za rękę np. wyprowadzany na smyczy pies może mocno szarpnąć,</li>
                        <li>upadek na ręce, przedramiona – może powodować naruszenie w okolicy obręczy  barkowej,</li>
                        <li>powstałe bez widocznego urazu.</li>
                    </ul>
                    <p>W każdym z tych incydentów dochodzi do naruszenie innych części barku, dlatego najpierw trzeba go rozłożyć na części pierwsze.</p>
                    <h3>Budowa obręczy barkowej.</h3>
                    <p>Musimy wiedzieć, że nie ma takiego stawu jak bark. Bark to funkcjonalna nazwa połączenia kilku stawów, te ważniejsze to:</p>
                    <ul>
                        <li>polaczenie kości ramiennej z łopatką- staw ramienny,</li>
                        <li>połączenie obojczyka z łopatką- staw barkowo-obojczykowy,</li>
                        <li>połączenie obojczyka z mostkiem- staw mostkowo-obojczykowy,</li>
                        <li>połączenie łopatki z żebrami.</li>
                    </ul>
                    <p>Uraz w każdym z tych miejsc może powodować ból w ramieniu, co nie oznacza, że tam jest właśnie źródło problemu. Wisienką na torcie jest fakt, że także problemy z karkiem mogą dawać ból barku, niektóre mięśnie biegną od barku- do karku (mięsień czworoboczny). Dla zapamiętania proponuję wierszyk
                    </p>
                    <q>Choć przyczepiam się do karku, lubię stwarzać bóle barku.</q>
                    <h3>Co tam może boleć ?</h3>
                    <p>Jasne więc wydaje się być, że pierwszym krokiem do zlikwidowania bólu jest znalezienie źródła problemu. Podzieliliśmy sobie bark na kilka osobnychczęści i w każdej z nich może występować problem:

                    – staw ramienny – jak w każdym stawie znajdują się tam połączone ze sobą kości, chrząstka stawowa i więzadła, które zapewniają lepszą stabilizację.Mogą tam pojawić sie zwyrodnienia, chrząstka stawowa morze się „ścierać”, jednak najczęściej spotykanym problemem są naciągnięte więzadła. Istotną rolę spełniają też mięśnie, które mają za zadanie dociskać kość ramienną. Jedna grupa mięśniowa dociska kość do góry (dlatego jak niesiesz siatki z zakupami to kość nie spada w dół). Druga grupa dociska kość do środka. Jeśli mięsnie nie wykazują prawidłowego napięcia może powstawać ból, przeskakiwanie i ograniczenie zakresu ruchu.

                    -połączenie obojczyka z barkiem i mostkiem. Obojczyk to kość, z jednej strony połączona z mostkiem, z drugiej strony łączy się z barkiem. Z obu stronpołączenie to jest usztywnione więzadłami i tak jak wszędzie więzadła te mogą się, naciągnąć, naderwać, lub nawet zerwać. Okazuje się, że nie jest to bardzo trudne- crosfitowcy którzy rzucają sztangę na klatkę piersiową podczas rwania, matka nosząca małe dziecko, czy hydraulik noszący na ramieniu ciężką torbę z narzędziami to tylko kilka przykładów naruszenia obojczyka.

                    – łopatka- ślizga się po żebrach, ale do tego potrzebna jest równowaga mięśniowa, napięte mięśnie blokują łopatkę co wpływa na ograniczenie ruchu ręki.

                    – zwyrodnienia- mogą powstać jak w każdym stawie często jednak to nie one są źródłem a sama diagnoza jest po prostu mylna.</p>
                    <h3>Co robić ?</h3>
                    <p>Postępowanie w przypadku bólu barku uzależnione jest od tego gdzie znajduje się źródło problemu, dlatego też najważniejsza jest tutaj odpowiednia diagnostyka (badanie). W gabinecie wygląda to tak:

                    wywiad, określi czy kiedykolwiek wcześniej bark był kontuzjowany, może to konsekwencja starego urazu. Ważny jest także mechanizm urazu- kiedy pojawił się ból, czy po upadku na bok, czy przy grze w siatkówkę itd.
                    badanie zakresu ruchu- czy jesteś w stanie unieść rękę tak samo jak zdrową, czy może masz z tym problem. Panie często mówią: „nie mogę zapiąć stanika”.
                    badanie palpacyjne – czyli szukanie dotykiem nieprawidłowości, bolesnych miejsc, twardych guzków na mięśniach.
                    badanie równowagi mięśniowej- pozwala określić czy mięśnie pracują prawidłowo, a co za tym idzie, czy dobrze stabilizują bark.
                    testy więzadłowe- umożliwiają ocenę uszkodzenia więzadeł- które odpowiadają za stabilizację stawów.
                    Dopiero po tak przeprowadzonym badaniu jestem w stanie określić gdzie jest problem, co zostało naciągnięte, co działa prawidłowo, a co nie. Wtedy, przechodzimy do rehabilitacji.</p>
                </article>
            )
        } else if (props.id === "BÓL ŁOKCIA I DRĘTWIENIE PALCÓW.") {
            return (
                <article className="article">
                    <img src={ArImg2} alt="BÓL ŁOKCIA" />
                    <h2>BÓL ŁOKCIA I DRĘTWIENIE PALCÓW.</h2>
                    <p>Każdy z nas przynajmniej raz w życiu uderzył się w łokieć i poczuł przeszywający ból oraz cierpnięcie nazywane często „prądem”. To uczucie spowodowane jest podrażnieniem nerwu łokciowego i na szczęście  szybko mija. Co zrobić jednak gdy łokieć nie przestaje boleć, albo drętwieje nam ręka i cierpną palce u dłoni a my czujemy, że nasza ręka jest coraz słabsza ?Pomijając urazy typu: złamanie, zwichnięcie, uderzenie, to w swojej praktyce znalazłem dwie podstawowe przyczyny bólu w łokciu: ból z przeciążenia  mięśni, oraz ucisk  na nerw biegnący do ręki. </p>
                    <h3>Ból z przeciążenia- łokieć tenisisty.</h3>
                    <p>Ból z przeciążenia to nic innego jak po prostu zmęczone, przepracowane mięśnie. Taka sytuacja pojawia się gdy przez długi okres wykonujemy  te same, powtarzające się ruchy obciążając konkretną grupę mięśniową – klasycznym przykładem jest tutaj łokieć tenisisty. W tej przypadłości, ciągłe, powtarzające się uderzanie tenisity rakietą w piłkę wymagają mocnego skurczu mięsni prostujących nadgarstek. Mięśnie te przyczepiają sie z bocznej (zewnętrznej) części łokcia. Jeżeli mięśnie będą przeciążone zaczną boleć. Najpierw tylko podczas danego wysiłku, później podczas innych aktywności, aż w końcu ból będzie towarzyszył nawet w czynnościach dnia codziennego. Trzeba jednak zaznaczyć, że choć tytułowym przykładem jest tutaj tenisista- to przypadłość ta dotyka często informatyków i pracowników biurowych którzy nadmiernie eksploatują swoje mięśnie przedramienia.

                    Innym przykładem jest „łokieć golfisty” czyli taki sam ból przeciążeniowy, ale występujący po wewnętrznej stronie łokcia.</p>
                    <h3>Ucisk na nerw.</h3>
                    <p> Nerwy wychodzą z kręgosłupa i biegną do dłoni. Wyobraź je sobie jako bardzo małe kable telefoniczne. Telefoniczne, ponieważ przesyłają one informacje.Takie przesyłanie informacji spełnia dwie główne funkcje:</p>
                    <ul>
                        <li>czuciową, jeśli dotkniesz palcem gorącej wody, od razu poczujesz ciepło prawda ? Receptory odbierają dany bodziec i przesyłają go nerwami do  mózgu. To tam pojawia się wiadomość: GORĄCE ! Oczywiście dotyczy to tez innych bodźców: zimna, wibracji, bólu i tak dalej.</li>
                        <li>ruchowa, jeśli chcę chwycić szklankę w rękę w moim mózgu pojawia się informacja „chwyć szklankę”. Ta informacja wysyłana jest nerwami które poruszają konkretne mięśnie, dzięki czemu można wykonać ruch.</li>
                    </ul>
                    <p>Widzisz więc, ze nerwy są bardzo ważne, zarówno po to żeby odczuwać bodźce, oraz po to aby sterować mięśniami i wykonywać ruch. Na drodze z kręgosłupa do ręki nerwy muszą pokonać wiele przeszkód. Przechodzą pod mięśniami, obok więzadeł, wzdłuż kości, przebijają powięzi,  penetrują stawy. Czasem zdarzy się tak, że biegnący nerw zostanie uciśnięty (usidlony) przez jakąś strukturę. Wtedy to dochodzi do upośledzenia funkcji takiego nerwu. Może powodować to różne sensacje (pieczenie, ból, cierpnięcie) a także może osłabiać działanie mięśni (nie mogę utrzymać szklanki).

                    Wyobraź sobie nerw jako wąż ogrodowy którym płynie woda pod wysokim ciśnieniem. Podlewasz sobie w ogrodzie kwiatki w piękny słoneczny dzień, zimna woda tryska mocząc wszystkie Twoje rośliny, aż tu nagle ciśnienie spada… tryska coraz mniej, i mniej i mnie, aż w końcu ledwo co kapie. Oburzony rzucasz węża i idziesz szukać przyczyny. Idziesz wzdłuż węża, idziesz, aż tu nagle widzisz, że na samym środku ktoś postawił rower przygniatając Twojego węża, blokując tym samym przepływ wody. Klasycznym przykładem jest ucisk mięśni pochyłych szyi na nerwy splotu ramiennego. Jeśli mięsień ten będzie zbyt mocno  napięty (przykurczony) może ucisnąć nerwy. Taka sytuacja nazywa się Zespołem mięśnia pochyłego przedniego. Występują dolegliwości bólowe i zaburzenia czucia w obrębie ręki. Czasami dochodzi do osłabienia (a nawet zaniku) mięsni dłoni.</p>
                </article>
            )
        } else if (props.id === "BÓL KRĘGOSŁUPA- CO ROBIĆ") {
            return (

                <article className="article">
                    <img src={ArImg3} alt="BÓL KRĘGOSŁUPA" />
                    <h2>BÓL KRĘGOSŁUPA- CO ROBIĆ</h2>
                    <p>Ból kręgosłupa dotyka coraz to młodsze osoby. Może jesteś sportowcem i dźwigając ciężary czujesz ból w ledźwiach ? Może codziennie pracujesz siedząc przy biórku i uważasz, że plecy bolą od siedzenia? Może jesteś młodą kobietą, która dopiero co urodziała i wmawia jej się, że ból kręgosłupa to coś normalnego i tak już będzie. A może jestes po czterdziestce, masz przepukliny, zwyrodnienia i jesteś zdania, że nic już nie da się z tym zrobić. Niezależnie od tego do której grupy się wpisujesz musisz wiedzieć, że ból kręgosłupa można pokonać. Dowiedz się jak !</p>
                    <h3>Budowa kręgosłupa.</h3>
                    <p>Kręgosłup zbudowany jest z małych kości- kręgów, które łączą się ze sobą ruchomo. Musisz wiedzieć jednak, ze kręgosłup nie jest prosty, posiada naturalne wygięcia:</p>
                    <ul>
                        <li>lordozę- wygięcie do przodu,</li>
                        <li>kifozę- wygięcie do tyłu.</li>
                    </ul>
                    <p>Taka budowa powoduje lepsza amortyzację i może znosić większe obciążenia. Kręgosłup dzieli się na odcinki: szyjny (C) , piersiowy (TH) i lędźwiowy (L). Między kręgami znajdują się dyski między kręgowe, które zawierają dużą ilość wody a ich zadaniem jest amortyzacja obciążeń i wspieranie ruchu. To tutaj częst pojawia się problem typu: wyskoczył mi dysk, mam przepuklinę, rwa kulszowa i tak dalej.</p>
                    <p>Do kręgosłupa przyczepia się spora liczba mięśni, przy problemach z kręgosłupem mogą one się mocno napinać, często słyszę wtedy:</p>
                    <q>Zobacz jakie tu jest twarde</q><br />
                    <q>Ale mam spięte mięśnie</q>
                    <h3>Problemy z kręgosłupem.</h3>
                    <p>Mówiłem o tym, że kręgosłup ma naturalne wygięcia, niestety może tez dojść do skrzywieniaktórego być nie powinno. Najczęściej kojarzymy to z noszeniem przez dzieci plecaka na jednym ramieniu, garbieniem się przed biurkiem jednak skrzywienie powoduje także praca jednostronna np. w fabryce gdy ciągle skręcasz się w jedną stronę, bierzesz jakiś element, wkładasz do maszyny i znów się skręcasz. Częstym żródłem problemu jest tez zła pozycja przy biurku np. trzymanie monitora w innym miejscu niż klawiatury. Jezeli piszesz coś na klawiaturze i masz ekran przed sobą, jesteś w miarę „prosty”. Jeżeli natomiast przeniesiesz monitor o 30 cm w lewo Twoja szyja jest nieco skręcona. Może to skręcenie jest niewielkie, ale 5 godzin dziennie po 5 dni w tygodniu razy cztery tygodnie, to w miesiącu daje dużą ilość godzin spędzoną w tej pozycji. To wtedy własnie krótkie mięśnie przy kręgosłupie napinają się, twardnieją i bolą.</p>
                    <h3>Zwyrodnienia.</h3>
                    <p>Bardzo często słyszę w gabinecie: „boli mnie kręgosłup bo mam zwyrodnienia”.  Ludzie są przekonani, że skoro wykonali prześwietlenie kręgosłupa i coś tam wyszło nie tak to na pewno to musi być przyczyną bólu. Pytanie tylko brzmi</p>
                    <q>„Skąd wiesz, że to właśnie zwyrodnienia Cię bolą ?”</q>
                    <p>W kręgosłupie jest wiele więzadeł, mięśni, dyski, a sam ból może być spowodowany nawet inną częścią ciała- czy badałeś to wszystko i wiesz, że to na pewno zwyrodnienia ?  Badania pokazują, że 37% osób w wieku 20 lat wykazuje zwyrodnienia dolnego odcinka kręgosłupa !</p>
                    <h3>Przepukliny.</h3>
                    <p>Przepuklina to po prostu „wylanie się” dysku na zewnątrz. Przy takim uszkodzeniu, to co się wyleje, może uciskać nerwy- tak właśnie powstaje rwa kulszowa, to daje ból kręgosłupa, drętwienie, pieczenie, problemy ze schylaniem. Są różne etapy „wylewania się” dysku:</p>
                    <ul>
                        <li>początkowa degeneracja- niewielki zmiany, zachodzące wewnątrz dysku,</li>
                        <li>wypuklina  (protruzja)- zmiany zaczynają uzewnętrzniać się poza dysk, jednak nie przerywają jego ciągłości,</li>
                        <li>przepuklina (ekstruzja)- wylewający się dysk przerywa pierścień i wylewa się na zewnątrz,</li>
                        <li>sekwestracja- to co się wylało odrywa się od reszty.</li>
                    </ul>
                    <p>Niektórzy sądzą, że jedynym sposobem leczenia przepukliny jest operacja. Przeprowadzone badania pokazują jednak, że 70% przepuklin może się spontanicznie cofnąć ! Tobie jednak nie zalecam czekania na cud i patrzenia jak przepuklina się samoczynnie cofa. Jeśli do niej doszło bo .. masz skrzywiony kręgosłup, złą postawę, nieprawidłową pozycję w pracy to nie czekaj aż problem sam zniknie, udaj się do specjalisty, który określi dlaczego do tego doszło. To znacznie zwiększy Twoje szanse. Podczas igrzysk olimpijskich w Rio de Janeiro (2016r.) losowo przebadano sportowców. Okazało się, że 52% z nich wykazywało umiarkowaną lub ciężką chorobę kręgosłupa. To znaczy, że jeden z najlepszych sportowców na globie podczas zawodów wychodzi, biegnie, rzuca, skacze i daje radę, a Ty nie możesz się do końca wyprostować, bierzesz zastrzyki i L4 ? To się nie trzyma kupy.</p>
                    <h3>Napięte mięśnie.</h3>
                    <p>Złe ustawienie kręgosłupa może powodować napinanie się mięśni które będą powodowały ból.</p>
                    <h3>Czy bieganie powoduje niszczenie kręgosłupa ?</h3>
                    <p>To częste pytanie które słyszę, jednak odpowiedź jest złożona. Ogólnie krążki międzykręgowe osób biegających są w LEPSZYM STANIE niż osób nieaktywnych fizycznie (są wyższe). Z pewnością jest to dobra wskazówka dla tych którzy mają zdrowy kręgosłup i chcą aby taki został. Jeśli natomiast masz już zdiagnozowany problem (przepuklina, skrzywienie itp.)  bieganie MOŻE pogłębiać Twój problem.</p>
                    <h3>Co robisz ?</h3>
                    <p>Jeśli nie masz problemy z kręgosłupem zachęcam Cię do aktywności fizycznej. Badania pokazują, że ćwiczenia zmniejszają problemy z kręgosłupem i zachowują go w dobrym zdrowiu.
                    Jeśli natomiast masz już problem, wybierz się do specjalisty który znajdzie przyczynę Twoich dolegliwości, przebada mięśnie, więzadła oraz inne struktury, a w razie potrzeby zleci badanie obrazowe jak RTG czy rezonans.
Z pewnością nie powinieneś czekać aż samo przejdzie. </p>
                </article>
            )
        } else if (props.id === "CO ZROBIĆ GDY BOLI KOLANO") {
            return (
                <article className="article">
                    <img src={ArImg4} alt="Ból barku" />
                    <h2>CO ZROBIĆ GDY BOLI KOLANO?</h2>
                    <p>Jeżeli to czytasz to prawdopodobnie masz problem z bólem kolana. Może czasem się blokuje, coś „strzeli”, a może słyszysz nieprzyjemnie tarcie gdy próbujesz wyprostować nogę. Wszystkie z wymienionych sytuacji mogą zachodzić zarówno z urazu bezpośredniego, na przykład grałeś w piłkę, poślizgnąłeś się na trawie, coś strzeliło w kolanie i teraz boli. Problem może mieć tez przyczynę przeciążeniową, często bowiem jest tak, że do gabinetu przychodzi pacjent, który twierdzi, że przecież nie miał wypadku – a kolano boli.</p>
                    <h3>Najczęstsze urazy kolana.</h3>
                    <p>Łąkotki to znajdujące się w kolanie dwa jakby kliny. Te kliny są wsadzone pomiędzy kość udową i kości podudzia i mają poprawiać stabilność. Czasem jednak dzieje się tak, że jakiś nieprawidłowy, zbyt gwałtowny ruch może spowodować zakleszczenie łąkotki, czy jej pęknięcie. W zależności od tego jaki to rodzaj urazu stosuje się różne metody leczenia, zaczynając od odpoczynku, przez rehabilitację, dochodząc do operacji.

                    Więzadła. W kolanie znajduje się duża liczba więzadeł, to bardzo krótkie (kilka- kilkadziesiąt cm.) pasma tkanki łącznej które można porównać do taśmy która ma utrzymywać dwa elementy. Więzadła są bardzo wytrzymałe (niektóre wytrzymują nawet kilka ton) czasem jednak możesz mieć pecha i jedno zerwać. Urazy więzadeł dzielimy na:</p>
                    <ul>
                        <li>Urazy 1 stopnia, gdzie dochodzi do przerwania niewielkiej liczby włókien więzadła, pojawia się ból, jednak nie występuje brak stabilności,</li>
                        <li>Urazy 2 stopnia, dochodzi do przerwania większej ilości włókien, występuje ból, prawidłowy ruch jest utrudniony,</li>
                        <li>Urazy 3 stopnia, całkowite przerwanie więzadła, występuje ból, staw jest niestabilny. Sposób leczenia urazu więzadeł zależy od tego jaki stopień uszkodzenia występuje.</li>
                    </ul>
                    <h3>Urazy rzepki.</h3>
                    <p>Rzepka to kość wielkości brzoskwini wbudowana w kolano. Zginając i prostując kolano rzepka ślizga się to w górę, to w dół i to jest jej główne zadanie. Ten ślizg zachodzi po specjalnym torze (taka rynienka żeby rzepka nie wyskoczyła), czasem jednak zdarza się, że ta mała kość „wyskoczy” w bok- mamy wtedy do czynienia z podwichnięciem rzepki. Jeżeli nie ślizga się ona po wytyczonej rynience i coraz bardziej ucieka do boku nazywamy to bocznym przyparciem rzepki. Rzepka od dołu pokryta jest chrząstką- (taka jakby gęsta maść) która powoduje, że rzepka się nie ściera. Jeśli jednak ta chrząstka wytrze się zbyt mocno lekarze diagnozują chondromalację rzepki- moim zdaniem diagnoza ta jest mocno nadużywana, szczerze mówiąc wydaje mi się, że jak badający nie wie co powiedzieć to po prostu mówi: „chondromalacja rzepki”.</p>
                    <h3>Mam zwyrodnienia.</h3>
                    <p>
                        Tak na marginesie, gdyby ktoś proponował Ci zastrzyki z kwasu hialuronowego, to badanie mówi, że ten kwas działa tak samo jak placebo:
                    </p>
                    <h3>Dlaczego boli mnie kolano ?</h3>
                    <p>Już na tym etapie  pewnie się domyślasz, że nie da się odpowiedzieć na pytanie: „dlaczego boli mnie kolano i co mam z tym zrobić?”. Jeśli boli Cię kolano, może to być spowodowane urazem łąkotek, naderwanie więzadeł, może jest problem z rzepką, naciągnąłeś mięśnie. a może to jeszcze coś innego ? Nie da się odpowiedzieć bez prawidłowego badania (diagnostyki).</p>
                    <h3>Nie powiem Ci co to jest dopóki… Cię nie przebadam.</h3>
                    <p>Zawsze powtarzam, że najważniejszą rzeczą w gabinecie jest wywiad i badanie. Po rozmowie z pacjentem można się dowiedzieć:</p>
                    <ul>
                        <li>czy miał jakiś wypadek ?</li>
                        <li>czy ból pojawił się nagle ?</li>
                        <li>czy jest coś co zwiększa ból ?</li>
                        <li>czy już coś z tym robił ? Itd.</li>
                    </ul>
                    <p>Następnie przechodzimy do badania. Wykonuje testy mięśniowy aby sprawdzić, czy mięśnie mają prawidłowe napięcie. Sprawdzam stabilność więzadeł kolana,wykonuję testy ortopedyczne, badam zakres ruchu i porównuję go ze zdrową nogą. Do tego dodaję jeszcze palpację (macanie) gdzie szukam bolesnych, lub odstających od normy miejsc (np. coś przeskakuje, kłuje, piecze itd.). Dopiero wtedy mogę powiedzieć gdzie leży problem, co jest uszkodzone i jak to naprawić.</p>
                    <h3>A może to reumatyzm ?</h3>
                    <p>Czasem, gdy pacjent przychodzi do gabinetu (nie tylko z kolanem) słyszę: „może to reumatyzm, moja mama chorowała”. Dlatego chcę żebyś dowiedział się teraz, jak rozpoznać reumatyzm:</p>
                    <ul>
                        <li>Często atakuje te same stawy po obu stronach (parzyście),</li>
                        <li>Atakuje małe stawy (palce, stopy, nadgarstki),</li>
                        <li>Ból i sztywność- szczególnie rano,</li>
                        <li>Obrzęk,</li>
                        <li>Tkliwość,</li>
                        <li>Ograniczenie ruchomości,</li>
                        <li>Deformacja stawu.</li>
                    </ul>
                    <p>Jeśli więc po grze w koszykówkę puchnie Ci kolano, coś w nim trzeszczy i boli to raczej nie bedzie to reumatyzm, bo… nie boli parzyście, nie jest to małystaw, nie miałeś sztywności rano, itd. Choć żeby mieć pewność po prostu udaj się do specjalisty.</p>
                </article>
            )
        }
        else if (props.id === "BIODRO TRZASKAJĄCE- NAPRAW TO!") {
            return (
                <article className="article">
                    <img src={ArImg5} alt="BIODRO TRZASKAJĄCE" />
                    <h2>BIODRO TRZASKAJĄCE- NAPRAW TO!</h2>
                    <p>Biodro przeskakujące / strzelające to obok zwyrodnienia stawu biodrowego chyba najszczęstsza przypadłość w tej okolicy ciała. Choć często przebiega bezbólowo, a jedynym niepokojącym symptomem jest wyczuwalne (i czasem słyszalne) przeskakiwanie nie powinno się bagatelizować tego problemu.</p>
                    <img src={AImg} alt="" />
                    <h3>Co tam może przeskakiwać ?</h3>
                    <p>Jeśli spojrzymy sobie na ilustrację lewego biodra możemy wyróżnić tam kilka elementów:
                    7- mięsień pośladkowy średni, 1- napinacz powięzi szerokiej, 3- mięsień pośladkowy wielki, 4- pasmo biodrowo-piszczelowe.
                    Napinacz powięzi szerokiej (1) oraz mięsień pośladkowy wielki (3) układają się w charakterystyczny sposób, dlatego też układ ten został nazwany „trójkątem mięśniowym biodra”. To właśnie nieprawidłowe napięcie tych struktur może doprowadzić do powstania charakterystycznego trzaskania.</p>
                    <p>Nadmierne napięcie pewnych elementów, najczęściej pasma biodrowo-piszczelowego powoduje „zaczepianie” o krętarz większy kości udowej. Utrzymywanie się takiej sytuacji może doprowadzić do podrażnienia kaletki (poduszeczki) która oddziela krętarz od mięśni.</p>
                    <h3>Co zrobić z przeskakiwaniem w biodrze ?</h3>
                    <p>Do tej pory najczęstszym postępowaniem jakie zalecano w tym przypadku było rozluźnianie napiętych struktur – głównie powięzi szerokiej uda. W tym celu często zaleca się: masaż, suche igłowanie, rolowanie itp. Ja jednak zamiast bez zastanowienia rozluźniać proponuję zadać sobie jedno pytanie:
                    „Dlaczego pasmo biodrowo-piszczelowe nadmiernie się napina”?
                    Dlatego też w swoim gabinecie wykonuję testy mięśniowe. Jak się okazuje pasmo to często nadmiernie napina się gdyż musi nadrabiać za kolegów którzy się obijają – chociażby mięsień pośladkowy wielki. Gdy ten mięsień jest nieaktywny nasz organizm musi sobie radzić w inny sposób. Idąc dalej, jeśli mamy nieaktywny mięsień pośladkowy i pasmo piszczelowe które pracuje za mocno- ale zaczniemy je rozluźniać- wtedy mamy nieaktywny pośladek i pasmo, które nie może za niego wykonywać roboty, bo jest masowane, rolowane, igłowane itd.</p>
                    <p>Dlatego pierwszym krokiem terapeuty powinno być zbadanie balansu mięśniowego, a następnie znalezienie przyczyny nieprawidłowości- o ile takie występują.</p>
                    <h3>Zwyrodnienie czy przeskakujące biodro ? Nie daj się wrobić !</h3>
                    <p>Często, gdy mamy problemy bólowe kierowani jesteśmy przez lekarza na RTG. Tak tez może być w tym wypadku. Jeśli jednak nasz problem pochodzi od nieprawidłowo pracujących mięśni to prześwietlenie niczego nie wykaże. Może za to wykazać zmiany zwyrodnieniowe którym bezpodstawnie zostaną przypisane nasze dolegliwości. Może to spowodować niepotrzebne przepisanie leków, lub nawet straszenie zabiegiem.</p>
                </article>
            )
        }
    }


    return (
        <div>
            {checkID()}

        </div>
    );
}

export default Article;