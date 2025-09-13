// Multi-language support
const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Preise',
    'nav.reviews': 'Bewertungen',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Premium Bräunungserlebnis in Aachen',
    'hero.subtitle': 'Erstklassige UV-Solarien und UV-freies Airbrush-Tanning. Unschlagbare Preise, kompetente Beratung.',
    'hero.cta1': 'Jetzt Termin buchen',
    'hero.cta2': 'Kontakt aufnehmen',
    'hero.feature1': '5/5 Bewertungen',
    'hero.feature2': 'Unschlagbare Preise',
    'hero.feature3': 'Premium Geräte',
    
    // Services Section
    'services.title': 'Unsere Premium Services',
    'services.subtitle': 'Hochwertige Geräte und fachkundige Beratung für Ihr perfektes Bräunungserlebnis',
    'services.uv.title': 'UV-Solarien',
    'services.uv.desc': 'Moderne Sonnenbänke mit individueller Einstellung für optimale Bräunungsergebnisse.',
    'services.uv.feature1': 'Individuelle Bräunungszeiten',
    'services.uv.feature2': 'Hochwertige UV-Röhren',
    'services.uv.feature3': 'Komfortable Liegen',
    'services.airbrush.title': 'UV-freies Bräunen',
    'services.airbrush.desc': 'Sanftes Airbrush-Tanning ohne UV-Strahlung für eine gleichmäßige, natürliche Bräune.',
    'services.airbrush.feature1': 'Schnelle Anwendung',
    'services.airbrush.feature2': 'Natürliche Bräune',
    'services.airbrush.feature3': 'Hautschonend',
    'services.consultation.title': 'Fachkundige Beratung',
    'services.consultation.desc': 'Persönliche Beratung für Ihr individuelles Bräunungsprogramm.',
    'services.consultation.feature1': 'Individuelle Beratung',
    'services.consultation.feature2': 'Hauttyp-Analyse',
    'services.consultation.feature3': 'Pflegetipps',
    
    // Pricing Section
    'pricing.title': 'Unschlagbare Preise',
    'pricing.subtitle': 'Premium Service zu fairen Preisen - beste Preis-Leistung in Aachen',
    'pricing.uv.title': 'UV-Solarien',
    'pricing.uv.period': '/ 50 Min',
    'pricing.uv.feature1': 'Premium Sonnenbänke',
    'pricing.uv.feature2': 'Individuelle Einstellung',
    'pricing.uv.feature3': 'Komfortable Atmosphäre',
    'pricing.uv.feature4': 'Fachkundige Beratung',
    'pricing.airbrush.title': 'Airbrush-Tanning',
    'pricing.airbrush.period': '/ 3x 30 Min',
    'pricing.airbrush.feature1': 'UV-freies Bräunen',
    'pricing.airbrush.feature2': 'Schnelle Anwendung',
    'pricing.airbrush.feature3': 'Natürliche Bräune',
    'pricing.airbrush.feature4': 'Hautschonend',
    'pricing.combo.title': 'Kombi-Paket',
    'pricing.combo.period': '/ Mix',
    'pricing.combo.feature1': 'UV + Airbrush',
    'pricing.combo.feature2': 'Flexible Nutzung',
    'pricing.combo.feature3': 'Maximaler Wert',
    'pricing.combo.feature4': 'Persönliche Beratung',
    'pricing.popular': 'Beliebt',
    'pricing.cta': 'Jetzt buchen',
    
    // Reviews Section
    'reviews.title': 'Was unsere Kunden sagen',
    'reviews.subtitle': 'Über 5/5 Sterne - Preis, Leistung, Service und Freundlichkeit in Perfektion',
    'reviews.review1.text': '"Preis, Leistung, Service, Ambiente und Freundlichkeit kommen hier zusammen – absolute Empfehlung und volle fünf Sterne!"',
    'reviews.review1.author': 'Google Bewertung',
    'reviews.review1.date': '04.11.2020',
    'reviews.review2.text': '"Das Studio ist super sauber, die Mitarbeiter sind sympathisch und die Sonnenbänke sind alle super gut!"',
    'reviews.review2.author': 'Facebook Bewertung',
    'reviews.review2.date': 'Aktuell',
    'reviews.review3.text': '"Jeder Besuch ist wie ein Kurzurlaub - entspannen Sie sich und lassen Sie den Alltag hinter sich!"',
    'reviews.review3.author': 'Sarah Sun Studio',
    'reviews.review3.date': 'Unser Versprechen',
    
    // Contact Section
    'contact.title': 'Kontakt & Terminbuchung',
    'contact.subtitle': 'Besuchen Sie uns in der Neupforte 13 in Aachen oder kontaktieren Sie uns direkt',
    'contact.address.title': 'Adresse',
    'contact.phone.title': 'Telefon',
    'contact.email.title': 'E-Mail',
    'contact.hours.title': 'Öffnungszeiten',
    'contact.hours.mon': 'Montag:',
    'contact.hours.monTime': 'geschlossen',
    'contact.hours.tue': 'Dienstag - Freitag:',
    'contact.hours.sat': 'Samstag:',
    'contact.hours.sun': 'Sonntag:',
    'contact.whatsapp.title': 'Schnelle Terminbuchung via WhatsApp',
    'contact.whatsapp.subtitle': 'Klicken Sie unten, um direkt über WhatsApp einen Termin zu vereinbaren',
    'contact.whatsapp.cta': 'WhatsApp Terminbuchung',
    
    // Footer
    'footer.description': 'Premium Bräunungserlebnis in Aachen seit 2011. Unschlagbare Preise, kompetente Beratung und erstklassige Geräte.',
    'footer.services.title': 'Services',
    'footer.services.uv': 'UV-Solarien',
    'footer.services.airbrush': 'Airbrush-Tanning',
    'footer.services.consultation': 'Beratung',
    'footer.contact.title': 'Kontakt',
    'footer.legal.title': 'Rechtliches',
    'footer.legal.owner': 'Inhaberin: Sarah Maron',
    'footer.legal.form': 'Einzelunternehmen',
    'footer.legal.since': 'seit 2011',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // Enhanced Services
    'services.category.all': 'Alle Services',
    'services.category.uv': 'UV-Bräunung',
    'services.category.airbrush': 'Airbrush',
    'services.category.premium': 'Premium',
    'services.uv.stat1': 'Premium Liegen',
    'services.uv.stat2': 'Min. Session',
    'services.uv.stat3': 'Sauberkeit',
    'services.uv.feature4': 'Klimatisierte Kabinen',
    'services.uv.feature5': 'Hautschutz Beratung inklusive',
    'services.uv.testimonial': '"Die Sonnenbänke sind top modern und super sauber. Perfekte Bräunung!"',
    'services.uv.testimonialAuthor': '- Maria K.',
    'services.uv.cta': 'Jetzt buchen',
    'services.airbrush.stat1': 'Min. Anwendung',
    'services.airbrush.stat2': 'Tage Haltbarkeit',
    'services.airbrush.stat3': 'Natürlich',
    'services.airbrush.feature4': 'Sofortige Ergebnisse',
    'services.airbrush.feature5': 'Langanhaltende Bräune',
    'services.airbrush.feature6': 'Individuelle Farbintensität',
    'services.airbrush.testimonial': '"Absolut perfekt! Natürliche Bräune ohne UV - genau was ich gesucht habe!"',
    'services.airbrush.testimonialAuthor': '- Sarah M.',
    'services.airbrush.cta': 'Termin vereinbaren',
    'services.consultation.stat1': 'Min. Beratung',
    'services.consultation.stat2': 'Individuell',
    'services.consultation.stat3': 'Jahre Erfahrung',
    'services.consultation.feature4': 'Sicherheitshinweise',
    'services.consultation.feature5': 'Nachbetreuung inklusive',
    'services.consultation.testimonial': '"Super Beratung! Endlich verstehe ich, was meine Haut braucht."',
    'services.consultation.testimonialAuthor': '- Lisa T.',
    'services.consultation.cta': 'Beratung anfragen',
    'services.vip.title': 'VIP Premium Paket',
    'services.vip.desc': 'Das ultimative Bräunungserlebnis: Kombination aus UV-Bräunung, Airbrush-Tanning und persönlicher Betreuung.',
    'services.vip.stat1': 'Min. Gesamtzeit',
    'services.vip.stat2': 'Services',
    'services.vip.stat3': 'Sparpaket',
    'services.vip.feature1': '30 Min. Premium UV-Bräunung',
    'services.vip.feature2': '30 Min. Airbrush-Tanning',
    'services.vip.feature3': 'Persönliche Beratung (30 Min.)',
    'services.vip.feature4': 'Premium Hautpflege Produkte',
    'services.vip.feature5': 'Privates VIP-Kabin',
    'services.vip.feature6': 'Champagner Service',
    'services.vip.testimonial': '"Ein absolutes Luxuserlebnis! Fühlt sich an wie ein Kurzurlaub."',
    'services.vip.testimonialAuthor': '- Anna S.',
    'services.vip.cta': 'VIP Paket buchen',
    'services.addon.title': 'Premium Hautpflege',
    'services.addon.desc': 'Ergänzen Sie Ihr Bräunungserlebnis mit professioneller Hautpflege für optimale Ergebnisse.',
    'services.addon.option1': 'Hydratisierende Maske',
    'services.addon.option2': 'Vitamin C Serum',
    'services.addon.option3': 'Anti-Aging Behandlung',
    'services.addon.cta': 'Hautpflege hinzufügen',
    'services.membership.title': 'Premium Mitgliedschaft',
    'services.membership.desc': 'Werden Sie Premium-Mitglied und genießen Sie exklusive Vorteile und Rabatte das ganze Jahr über.',
    'services.membership.benefit1': '20% Rabatt auf alle Services',
    'services.membership.benefit2': 'Prioritäts-Termine',
    'services.membership.benefit3': 'Geburtstags-Geschenk',
    'services.membership.benefit4': 'Freund einladen (50% Rabatt)',
    'services.membership.price': '/ Monat',
    'services.membership.cta': 'Mitglied werden',
    'services.comparison.title': 'Service-Vergleich',
    'services.comparison.uv': 'UV-Solarien',
    'services.comparison.airbrush': 'Airbrush',
    'services.comparison.vip': 'VIP Paket',
    'services.comparison.time': 'Dauer',
    'services.comparison.results': 'Ergebnisse',
    'services.comparison.skin': 'Hautfreundlichkeit',
    'services.comparison.price': 'Preis'
  },
  
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.pricing': 'Prijzen',
    'nav.reviews': 'Beoordelingen',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Premium Bruining Ervaring in Aken',
    'hero.subtitle': 'Eersteklas UV-zonnebanken en UV-vrije airbrush-tanning. Onverslaanbare prijzen, deskundig advies.',
    'hero.cta1': 'Nu afspraak maken',
    'hero.cta2': 'Contact opnemen',
    'hero.feature1': '5/5 Beoordelingen',
    'hero.feature2': 'Onverslaanbare prijzen',
    'hero.feature3': 'Premium apparatuur',
    
    // Services Section
    'services.title': 'Onze Premium Diensten',
    'services.subtitle': 'Hoge kwaliteit apparatuur en deskundig advies voor uw perfecte bruining ervaring',
    'services.uv.title': 'UV-zonnebanken',
    'services.uv.desc': 'Moderne zonnebanken met individuele instellingen voor optimale bruining resultaten.',
    'services.uv.feature1': 'Individuele bruiningstijden',
    'services.uv.feature2': 'Hoge kwaliteit UV-lampen',
    'services.uv.feature3': 'Comfortabele ligbedden',
    'services.airbrush.title': 'UV-vrije bruining',
    'services.airbrush.desc': 'Zachte airbrush-tanning zonder UV-straling voor een gelijkmatige, natuurlijke bruining.',
    'services.airbrush.feature1': 'Snelle toepassing',
    'services.airbrush.feature2': 'Natuurlijke bruining',
    'services.airbrush.feature3': 'Huidvriendelijk',
    'services.consultation.title': 'Deskundig advies',
    'services.consultation.desc': 'Persoonlijk advies voor uw individuele bruiningsprogramma.',
    'services.consultation.feature1': 'Individueel advies',
    'services.consultation.feature2': 'Huidtype analyse',
    'services.consultation.feature3': 'Verzorgingstips',
    
    // Pricing Section
    'pricing.title': 'Onverslaanbare prijzen',
    'pricing.subtitle': 'Premium service tegen eerlijke prijzen - beste prijs-kwaliteit verhouding in Aken',
    'pricing.uv.title': 'UV-zonnebanken',
    'pricing.uv.period': '/ 50 min',
    'pricing.uv.feature1': 'Premium zonnebanken',
    'pricing.uv.feature2': 'Individuele instelling',
    'pricing.uv.feature3': 'Comfortabele sfeer',
    'pricing.uv.feature4': 'Deskundig advies',
    'pricing.airbrush.title': 'Airbrush-tanning',
    'pricing.airbrush.period': '/ 3x 30 min',
    'pricing.airbrush.feature1': 'UV-vrije bruining',
    'pricing.airbrush.feature2': 'Snelle toepassing',
    'pricing.airbrush.feature3': 'Natuurlijke bruining',
    'pricing.airbrush.feature4': 'Huidvriendelijk',
    'pricing.combo.title': 'Combinatie pakket',
    'pricing.combo.period': '/ Mix',
    'pricing.combo.feature1': 'UV + Airbrush',
    'pricing.combo.feature2': 'Flexibel gebruik',
    'pricing.combo.feature3': 'Maximale waarde',
    'pricing.combo.feature4': 'Persoonlijk advies',
    'pricing.popular': 'Populair',
    'pricing.cta': 'Nu boeken',
    
    // Reviews Section
    'reviews.title': 'Wat onze klanten zeggen',
    'reviews.subtitle': 'Meer dan 5/5 sterren - prijs, prestaties, service en vriendelijkheid in perfectie',
    'reviews.review1.text': '"Prijs, prestaties, service, sfeer en vriendelijkheid komen hier samen – absolute aanbeveling en volle vijf sterren!"',
    'reviews.review1.author': 'Google beoordeling',
    'reviews.review1.date': '04.11.2020',
    'reviews.review2.text': '"De studio is super schoon, het personeel is sympathiek en de zonnebanken zijn allemaal super goed!"',
    'reviews.review2.author': 'Facebook beoordeling',
    'reviews.review2.date': 'Actueel',
    'reviews.review3.text': '"Elk bezoek is als een korte vakantie - ontspan en laat de dagelijkse routine achter je!"',
    'reviews.review3.author': 'Sarah Sun Studio',
    'reviews.review3.date': 'Onze belofte',
    
    // Contact Section
    'contact.title': 'Contact & Afspraak boeken',
    'contact.subtitle': 'Bezoek ons in de Neupforte 13 in Aken of neem direct contact met ons op',
    'contact.address.title': 'Adres',
    'contact.phone.title': 'Telefoon',
    'contact.email.title': 'E-mail',
    'contact.hours.title': 'Openingstijden',
    'contact.hours.mon': 'Maandag:',
    'contact.hours.monTime': 'gesloten',
    'contact.hours.tue': 'Dinsdag - Vrijdag:',
    'contact.hours.sat': 'Zaterdag:',
    'contact.hours.sun': 'Zondag:',
    'contact.whatsapp.title': 'Snelle afspraak boeken via WhatsApp',
    'contact.whatsapp.subtitle': 'Klik hieronder om direct via WhatsApp een afspraak te maken',
    'contact.whatsapp.cta': 'WhatsApp afspraak boeken',
    
    // Footer
    'footer.description': 'Premium bruining ervaring in Aken sinds 2011. Onverslaanbare prijzen, deskundig advies en eersteklas apparatuur.',
    'footer.services.title': 'Diensten',
    'footer.services.uv': 'UV-zonnebanken',
    'footer.services.airbrush': 'Airbrush-tanning',
    'footer.services.consultation': 'Advies',
    'footer.contact.title': 'Contact',
    'footer.legal.title': 'Juridisch',
    'footer.legal.owner': 'Eigenares: Sarah Maron',
    'footer.legal.form': 'Eenmanszaak',
    'footer.legal.since': 'sinds 2011',
    'footer.rights': 'Alle rechten voorbehouden.'
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs',
    'nav.reviews': 'Avis',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Expérience de Bronzage Premium à Aix-la-Chapelle',
    'hero.subtitle': 'Solariums UV de première classe et autobronzage sans UV. Prix imbattables, conseils experts.',
    'hero.cta1': 'Prendre rendez-vous maintenant',
    'hero.cta2': 'Nous contacter',
    'hero.feature1': '5/5 Avis',
    'hero.feature2': 'Prix imbattables',
    'hero.feature3': 'Équipement premium',
    
    // Services Section
    'services.title': 'Nos Services Premium',
    'services.subtitle': 'Équipement de haute qualité et conseils experts pour votre expérience de bronzage parfaite',
    'services.uv.title': 'Solariums UV',
    'services.uv.desc': 'Cabines de bronzage modernes avec réglages individuels pour des résultats de bronzage optimaux.',
    'services.uv.feature1': 'Temps de bronzage individuels',
    'services.uv.feature2': 'Tubes UV de haute qualité',
    'services.uv.feature3': 'Couchettes confortables',
    'services.airbrush.title': 'Bronzage sans UV',
    'services.airbrush.desc': 'Autobronzage doux sans rayonnement UV pour un bronzage uniforme et naturel.',
    'services.airbrush.feature1': 'Application rapide',
    'services.airbrush.feature2': 'Bronzage naturel',
    'services.airbrush.feature3': 'Respectueux de la peau',
    'services.consultation.title': 'Conseils experts',
    'services.consultation.desc': 'Conseils personnalisés pour votre programme de bronzage individuel.',
    'services.consultation.feature1': 'Conseils individuels',
    'services.consultation.feature2': 'Analyse du type de peau',
    'services.consultation.feature3': 'Conseils de soins',
    
    // Pricing Section
    'pricing.title': 'Prix imbattables',
    'pricing.subtitle': 'Service premium à des prix équitables - meilleur rapport qualité-prix à Aix-la-Chapelle',
    'pricing.uv.title': 'Solariums UV',
    'pricing.uv.period': '/ 50 min',
    'pricing.uv.feature1': 'Cabines de bronzage premium',
    'pricing.uv.feature2': 'Réglage individuel',
    'pricing.uv.feature3': 'Ambiance confortable',
    'pricing.uv.feature4': 'Conseils experts',
    'pricing.airbrush.title': 'Autobronzage',
    'pricing.airbrush.period': '/ 3x 30 min',
    'pricing.airbrush.feature1': 'Bronzage sans UV',
    'pricing.airbrush.feature2': 'Application rapide',
    'pricing.airbrush.feature3': 'Bronzage naturel',
    'pricing.airbrush.feature4': 'Respectueux de la peau',
    'pricing.combo.title': 'Pack combiné',
    'pricing.combo.period': '/ Mix',
    'pricing.combo.feature1': 'UV + Autobronzage',
    'pricing.combo.feature2': 'Utilisation flexible',
    'pricing.combo.feature3': 'Valeur maximale',
    'pricing.combo.feature4': 'Conseils personnalisés',
    'pricing.popular': 'Populaire',
    'pricing.cta': 'Réserver maintenant',
    
    // Reviews Section
    'reviews.title': 'Ce que disent nos clients',
    'reviews.subtitle': 'Plus de 5/5 étoiles - prix, performance, service et amabilité en perfection',
    'reviews.review1.text': '"Prix, performance, service, ambiance et amabilité se rejoignent ici – recommandation absolue et cinq étoiles complètes!"',
    'reviews.review1.author': 'Avis Google',
    'reviews.review1.date': '04.11.2020',
    'reviews.review2.text': '"Le studio est super propre, le personnel est sympathique et les cabines de bronzage sont toutes super bonnes!"',
    'reviews.review2.author': 'Avis Facebook',
    'reviews.review2.date': 'Actuel',
    'reviews.review3.text': '"Chaque visite est comme une petite vacance - détendez-vous et laissez le quotidien derrière vous!"',
    'reviews.review3.author': 'Sarah Sun Studio',
    'reviews.review3.date': 'Notre promesse',
    
    // Contact Section
    'contact.title': 'Contact & Réservation',
    'contact.subtitle': 'Visitez-nous au Neupforte 13 à Aix-la-Chapelle ou contactez-nous directement',
    'contact.address.title': 'Adresse',
    'contact.phone.title': 'Téléphone',
    'contact.email.title': 'E-mail',
    'contact.hours.title': 'Heures d\'ouverture',
    'contact.hours.mon': 'Lundi:',
    'contact.hours.monTime': 'fermé',
    'contact.hours.tue': 'Mardi - Vendredi:',
    'contact.hours.sat': 'Samedi:',
    'contact.hours.sun': 'Dimanche:',
    'contact.whatsapp.title': 'Réservation rapide via WhatsApp',
    'contact.whatsapp.subtitle': 'Cliquez ci-dessous pour prendre rendez-vous directement via WhatsApp',
    'contact.whatsapp.cta': 'Réservation WhatsApp',
    
    // Footer
    'footer.description': 'Expérience de bronzage premium à Aix-la-Chapelle depuis 2011. Prix imbattables, conseils experts et équipement de première classe.',
    'footer.services.title': 'Services',
    'footer.services.uv': 'Solariums UV',
    'footer.services.airbrush': 'Autobronzage',
    'footer.services.consultation': 'Conseils',
    'footer.contact.title': 'Contact',
    'footer.legal.title': 'Juridique',
    'footer.legal.owner': 'Propriétaire: Sarah Maron',
    'footer.legal.form': 'Entreprise individuelle',
    'footer.legal.since': 'depuis 2011',
    'footer.rights': 'Tous droits réservés.'
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Premium Tanning Experience in Aachen',
    'hero.subtitle': 'First-class UV tanning beds and UV-free airbrush tanning. Unbeatable prices, expert advice.',
    'hero.cta1': 'Book appointment now',
    'hero.cta2': 'Get in touch',
    'hero.feature1': '5/5 Reviews',
    'hero.feature2': 'Unbeatable prices',
    'hero.feature3': 'Premium equipment',
    
    // Services Section
    'services.title': 'Our Premium Services',
    'services.subtitle': 'High-quality equipment and expert advice for your perfect tanning experience',
    'services.uv.title': 'UV Tanning Beds',
    'services.uv.desc': 'Modern tanning beds with individual settings for optimal tanning results.',
    'services.uv.feature1': 'Individual tanning times',
    'services.uv.feature2': 'High-quality UV tubes',
    'services.uv.feature3': 'Comfortable beds',
    'services.airbrush.title': 'UV-free tanning',
    'services.airbrush.desc': 'Gentle airbrush tanning without UV radiation for even, natural tanning.',
    'services.airbrush.feature1': 'Quick application',
    'services.airbrush.feature2': 'Natural tanning',
    'services.airbrush.feature3': 'Skin-friendly',
    'services.consultation.title': 'Expert consultation',
    'services.consultation.desc': 'Personal advice for your individual tanning program.',
    'services.consultation.feature1': 'Individual advice',
    'services.consultation.feature2': 'Skin type analysis',
    'services.consultation.feature3': 'Care tips',
    
    // Pricing Section
    'pricing.title': 'Unbeatable prices',
    'pricing.subtitle': 'Premium service at fair prices - best price-performance ratio in Aachen',
    'pricing.uv.title': 'UV Tanning Beds',
    'pricing.uv.period': '/ 50 min',
    'pricing.uv.feature1': 'Premium tanning beds',
    'pricing.uv.feature2': 'Individual setting',
    'pricing.uv.feature3': 'Comfortable atmosphere',
    'pricing.uv.feature4': 'Expert advice',
    'pricing.airbrush.title': 'Airbrush tanning',
    'pricing.airbrush.period': '/ 3x 30 min',
    'pricing.airbrush.feature1': 'UV-free tanning',
    'pricing.airbrush.feature2': 'Quick application',
    'pricing.airbrush.feature3': 'Natural tanning',
    'pricing.airbrush.feature4': 'Skin-friendly',
    'pricing.combo.title': 'Combo package',
    'pricing.combo.period': '/ Mix',
    'pricing.combo.feature1': 'UV + Airbrush',
    'pricing.combo.feature2': 'Flexible use',
    'pricing.combo.feature3': 'Maximum value',
    'pricing.combo.feature4': 'Personal advice',
    'pricing.popular': 'Popular',
    'pricing.cta': 'Book now',
    
    // Reviews Section
    'reviews.title': 'What our customers say',
    'reviews.subtitle': 'Over 5/5 stars - price, performance, service and friendliness in perfection',
    'reviews.review1.text': '"Price, performance, service, ambiance and friendliness come together here – absolute recommendation and full five stars!"',
    'reviews.review1.author': 'Google review',
    'reviews.review1.date': '04.11.2020',
    'reviews.review2.text': '"The studio is super clean, the staff is friendly and the tanning beds are all super good!"',
    'reviews.review2.author': 'Facebook review',
    'reviews.review2.date': 'Current',
    'reviews.review3.text': '"Every visit is like a short vacation - relax and leave everyday life behind!"',
    'reviews.review3.author': 'Sarah Sun Studio',
    'reviews.review3.date': 'Our promise',
    
    // Contact Section
    'contact.title': 'Contact & Appointment booking',
    'contact.subtitle': 'Visit us at Neupforte 13 in Aachen or contact us directly',
    'contact.address.title': 'Address',
    'contact.phone.title': 'Phone',
    'contact.email.title': 'E-mail',
    'contact.hours.title': 'Opening hours',
    'contact.hours.mon': 'Monday:',
    'contact.hours.monTime': 'closed',
    'contact.hours.tue': 'Tuesday - Friday:',
    'contact.hours.sat': 'Saturday:',
    'contact.hours.sun': 'Sunday:',
    'contact.whatsapp.title': 'Quick appointment booking via WhatsApp',
    'contact.whatsapp.subtitle': 'Click below to book an appointment directly via WhatsApp',
    'contact.whatsapp.cta': 'WhatsApp booking',
    
    // Footer
    'footer.description': 'Premium tanning experience in Aachen since 2011. Unbeatable prices, expert advice and first-class equipment.',
    'footer.services.title': 'Services',
    'footer.services.uv': 'UV Tanning Beds',
    'footer.services.airbrush': 'Airbrush tanning',
    'footer.services.consultation': 'Advice',
    'footer.contact.title': 'Contact',
    'footer.legal.title': 'Legal',
    'footer.legal.owner': 'Owner: Sarah Maron',
    'footer.legal.form': 'Sole proprietorship',
    'footer.legal.since': 'since 2011',
    'footer.rights': 'All rights reserved.'
  }
};

// Current language
let currentLanguage = 'de';

// Theme management
let currentTheme = localStorage.getItem('theme') || 'light';

// DOM elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const langButtons = document.querySelectorAll('.lang-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeLanguage();
  initializeNavigation();
  initializeAnimations();
  initializeSmoothScrolling();
  initializeParallaxEffects();
  initializeFormHandling();
  initializePerformanceOptimizations();
  
  // Initialize About Sarah section with delay
  setTimeout(() => {
    initializeAboutSarah();
  }, 1000);
});

// Theme management functions
function initializeTheme() {
  // Apply saved theme
  applyTheme(currentTheme);
  
  // Theme toggle event listener
  themeToggle.addEventListener('click', toggleTheme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      currentTheme = e.matches ? 'dark' : 'light';
      applyTheme(currentTheme);
    }
  });
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Language management functions
function initializeLanguage() {
  // Apply saved language
  const savedLang = localStorage.getItem('language') || 'de';
  setLanguage(savedLang);
  
  // Language button event listeners
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update active language button
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update document language
  document.documentElement.lang = lang;
  
  // Translate all elements
  translatePage();
}

function translatePage() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.dataset.translate;
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update page title
  document.title = translations[currentLanguage]['hero.title'] + ' - Sarah Sun Studio';
}

// Navigation functions
function initializeNavigation() {
  // Mobile menu toggle
  hamburger.addEventListener('click', toggleMobileMenu);
  
  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', handleNavbarScroll);
}

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMobileMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function handleNavbarScroll() {
  const scrolled = window.scrollY > 100;
  navbar.classList.toggle('scrolled', scrolled);
}

// Initialize About Sarah Section
function initializeAboutSarah() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAboutSarah);
    return;
  }

  console.log('Initializing About Sarah section...');

  // Animate statistics on scroll
  const statNumbers = document.querySelectorAll('.stat-number');
  console.log('Found stat numbers:', statNumbers.length);

  let statsAnimated = false;

  const animateStats = () => {
    if (statsAnimated) return;
    statsAnimated = true;
    
    console.log('Animating stats...');
    
    statNumbers.forEach((stat, index) => {
      const target = parseInt(stat.getAttribute('data-count'));
      console.log(`Animating stat ${index + 1}: ${target}`);
      
      let current = 0;
      const increment = target / 60; // 60 frames for smooth animation
      const duration = 2000; // 2 seconds
      const frameRate = duration / 60;
      
      const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        // Format number with commas for large numbers
        if (target >= 1000) {
          if (target === 5000) {
            stat.textContent = Math.floor(current / 1000) + 'K';
          } else {
            stat.textContent = Math.floor(current).toLocaleString();
          }
        } else {
          stat.textContent = Math.floor(current);
        }
      }, frameRate);
    });
  };

  // Trigger animation when stats are in view
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Stats container is in view');
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  const statsContainer = document.querySelector('.about-stats');
  if (statsContainer) {
    console.log('Stats container found, observing...');
    statsObserver.observe(statsContainer);
  } else {
    console.log('Stats container not found');
  }

  // Add image hover effects
  const imageContainer = document.querySelector('.image-container');
  if (imageContainer) {
    console.log('Image container found, adding hover effects...');
    
    imageContainer.addEventListener('mouseenter', () => {
      const floatingIcons = document.querySelectorAll('.floating-icon');
      console.log('Image hovered, animating floating icons:', floatingIcons.length);
      
      floatingIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.transform = 'translateY(-30px) rotate(360deg) scale(1.2)';
        }, index * 150);
      });
    });

    imageContainer.addEventListener('mouseleave', () => {
      const floatingIcons = document.querySelectorAll('.floating-icon');
      console.log('Image unhovered, resetting floating icons');
      
      floatingIcons.forEach(icon => {
        icon.style.transform = '';
      });
    });
  } else {
    console.log('Image container not found');
  }

  console.log('About Sarah section initialization complete');
}

// Animation functions
function initializeAnimations() {
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
  });

  // Initialize About Sarah Section
  setTimeout(() => {
    initializeAboutSarah();
  }, 500);
  }
  
  // Intersection Observer for custom animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .review-card');
  animatedElements.forEach(el => observer.observe(el));
  
  // Counter animation for numbers
  animateCounters();
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.counter);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current);
        }, 16);
        
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
}

// Smooth scrolling functions
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Parallax effects
function initializeParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.hero::before');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

// Form handling
function initializeFormHandling() {
  // WhatsApp form handling
  const whatsappButton = document.querySelector('.btn-whatsapp');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', (e) => {
      // Track WhatsApp clicks for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'contact',
          event_label: 'whatsapp'
        });
      }
    });
  }
  
  // Pricing button handling
  const pricingButtons = document.querySelectorAll('.pricing-card .btn-primary');
  pricingButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Scroll to contact section
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Performance optimizations
function initializePerformanceOptimizations() {
  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
  
  // Preload critical resources
  preloadCriticalResources();
}

function preloadCriticalResources() {
  // Preload hero images
  const heroImages = [
    'img/hero/herodesktop.png',
    'img/hero/heromobile.png'
  ];
  
  heroImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Service interactions
function initializeServiceInteractions() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    // Add click effect for service buttons
    const serviceBtn = card.querySelector('.service-btn');
    if (serviceBtn) {
      serviceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        serviceBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
          serviceBtn.style.transform = 'scale(1)';
        }, 150);
        
        // Track service interaction
        const serviceName = card.querySelector('h3').textContent;
        trackServiceInteraction(serviceName);
        
        // Scroll to contact section
        document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
}

function trackServiceInteraction(serviceName) {
  // Track service interest for analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'service_interest', {
      event_category: 'engagement',
      event_label: serviceName
    });
  }
  
  // Store in localStorage for personalized experience
  const interactions = JSON.parse(localStorage.getItem('serviceInteractions') || '[]');
  interactions.push({
    service: serviceName,
    timestamp: Date.now()
  });
  localStorage.setItem('serviceInteractions', JSON.stringify(interactions));
}

// Initialize service interactions after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initializeServiceInteractions();
  }, 1000);
});

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
  // Could send error to analytics service here
});

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    setLanguage,
    toggleTheme,
    translatePage
  };
}
