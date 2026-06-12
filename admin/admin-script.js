document.addEventListener('DOMContentLoaded', () => {
	const translations = {
		en: {
			adminAccess: 'Admin Access',
			dashboardBrand: 'Admin Dashboard',
			loginTitle: 'Secure admin login',
			loginIntro: 'Sign in to manage catalogue content, featured items, and updates for the public site.',
			loginNote: 'Use your admin email and password. After a successful sign in, you will be sent to the dashboard automatically.',
			welcomeBack: 'Welcome back',
			welcomeText: 'Enter your admin credentials to continue.',
			identifierLabel: 'Username or email',
			identifierPlaceholder: 'admin@domain.com',
			passwordLabel: 'Password',
			passwordPlaceholder: 'Enter password',
			showPassword: 'Show password',
			backToSite: 'Back to site',
			loginButton: 'Log in',
			loggingIn: 'Logging in...',
			helperText: 'Update the project settings in this file before going live.',
			requiredError: 'Please enter both username/email and password.',
			loginFailed: 'Login failed. Please try again.',
			ratePlaceholder: 'NPR 0,000',
				rateDatePlaceholder: 'Eg: Sunday, 2083 Jeth 30',
			titlePlaceholder: 'Product title',
			weightPlaceholder: '2 तोला',
			descriptionPlaceholder: 'Product description',
			imageHint: 'Choose a PNG or JPG file from your device.',
			navRates: 'Rates',
			navProducts: 'Products',
			navGallery: 'Gallery',
			navInventory: 'Inventory',
			navOrders: 'Orders',
			ratesKicker: 'Market control',
			ratesTitle: 'Update gold / silver rates',
			saveRates: 'Save rates',
			goldLabel: 'Gold rate',
			silverLabel: 'Silver',
			rateDateLabel: 'Day / Date',
			productsKicker: 'Catalog control',
			addProductTitle: 'Add product',
			clearForm: 'Clear form',
			titleLabel: 'Title',
			titleLabelNe: 'Title (NE) - optional',
			weightLabel: 'Weight',
			typeLabel: 'Type',
			chooseType: 'Choose type',
			typeGold: 'Gold',
			typeSilver: 'Silver',
			typeDiamond: 'Diamond',
			typeGoldSilver: 'Gold / Silver',
			typeGoldDiamond: 'Gold / Diamond',
			categoryLabel: 'Category',
			chooseCategory: 'Choose category',
			categoryRings: 'Rings',
			categoryNecklaces: 'Necklaces',
			categoryBracelets: 'Bracelets',
			categoryEarrings: 'Earrings',
			categoryOthers: 'Others',
			descriptionLabel: 'Description',
			descriptionLabelNe: 'Description (NE) - optional',
			imageLabel: 'Image attachment',
			addProductButton: 'Add product',
			inventoryKicker: 'Products list',
			allProductsTitle: 'Default products',
			tableTitle: 'Title',
			tableImage: 'Image',
			tableWeight: 'Weight',
			tableType: 'Type',
			tableCategory: 'Category',
			tableDescription: 'Description',
			tableActions: 'Actions',
			tableFeature: 'Feature',
			featureButton: 'Feature',
			featureLimitMessage: 'You can only showcase a maximum of 4 featured products on the homepage. Please unfeature an old item first!',
			updateProductButton: 'Update Product',
			editButton: 'Edit',
			deleteButton: 'Delete',
			ordersTitle: 'Orders',
			ordersText: 'Use this area later for order review, customer messages, and quick replies.',
			galleryKicker: 'Homepage media',
			galleryTitle: 'Gallery Control',
			galleryIntro: 'Manage 4 images and 4 videos for the homepage gallery layout.',
			galleryImagesTitle: 'Images',
			galleryVideosTitle: 'Videos',
			galleryImageHint: 'Images are compressed automatically. For faster upload, keep files under 10 MB.',
			galleryVideoHint: 'Videos are uploaded as-is. For faster upload, keep files under 10 MB.',
			galleryImage1: 'Image 1',
			galleryImage2: 'Image 2',
			galleryImage3: 'Image 3',
			galleryImage4: 'Image 4',
			galleryVideo1: 'Video 1',
			galleryVideo2: 'Video 2',
			galleryVideo3: 'Video 3',
			galleryVideo4: 'Video 4',
			galleryUpdateButton: 'Update',
			galleryPlaceholder: 'No asset',
			galleryUploading: 'Uploading asset...',
			galleryUploadText: 'Please wait while we update this slot.',
			galleryUpdated: 'Gallery slot updated successfully!',
			galleryChooseFile: 'Please choose a file first.',
			galleryCancelUpload: 'Cancel upload',
			galleryUploadingKeep: 'Keep uploading',
			galleryUploadFailed: 'Upload failed. Please try again.',
			rateSaved: 'Rates saved',
			productAdded: 'Product saved',
			productUpdated: 'Product updated',
			productDeleted: 'Product deleted',
			dashboardTitle: 'Welcome, admin.',
			dashboardIntro: 'This is the secure dashboard for managing your jewellery website content. You can expand it later with product management, featured item editing, and order handling tools.',
			statusLabel: 'Status',
			signedInLabel: 'Signed in as',
			themeLabel: 'Theme',
			quickActionsTitle: 'Quick actions',
			quickActionsText: 'Use this area for shortcuts when you add admin functionality.',
			chip1: 'Edit products',
			chip2: 'Update featured items',
			chip3: 'Manage hero copy',
			chip4: 'Review inquiries',
			contentTitle: 'Content management',
			contentText: 'Add tools here for updating product images, weights, descriptions, and availability from the admin side.',
			securityTitle: 'Security',
			securityText: 'This dashboard checks the sign-in session on load. If the session is missing, the user gets sent back to the login page.',
			logout: 'Log out',
			checking: 'Checking...',
			loading: 'Loading...',
			online: 'Online',
			adminUser: 'Admin user',
			themeValue: 'Gold / Cream',
			langButton: 'ने'
		},
		ne: {
			adminAccess: 'एडमिन पहुँच',
			dashboardBrand: 'एडमिन ड्यासबोर्ड',
			loginTitle: 'सुरक्षित एडमिन लगइन',
			loginIntro: 'साइटका सामग्री, विशेष वस्तुहरू र अपडेटहरू व्यवस्थापन गर्न लगइन गर्नुहोस्।',
			loginNote: 'आफ्नो इमेल र पासवर्ड प्रयोग गर्नुहोस्। सफल लगइनपछि तपाईं स्वतः ड्यासबोर्डमा पुग्नुहुनेछ।',
			welcomeBack: 'पुनः स्वागत छ',
			welcomeText: 'अगाडि बढ्न आफ्नो विवरण भर्नुहोस्।',
			identifierLabel: 'युजरनेम वा इमेल',
			identifierPlaceholder: 'admin@domain.com',
			passwordLabel: 'पासवर्ड',
			passwordPlaceholder: 'पासवर्ड लेख्नुहोस्',
			showPassword: 'पासवर्ड देखाउनुहोस्',
			backToSite: 'साइटमा फर्कनुहोस्',
			loginButton: 'लगइन',
			loggingIn: 'लगइन हुँदैछ...',
			helperText: 'लाइभ गर्नु अघि यो फाइलमा परियोजनाका विवरणहरू अपडेट गर्नुहोस्।',
			requiredError: 'युजरनेम/इमेल र पासवर्ड दुवै भर्नुहोस्।',
			loginFailed: 'लगइन भएन। कृपया फेरि प्रयास गर्नुहोस्।',
			ratePlaceholder: 'NPR 0,000',
				rateDatePlaceholder: 'उदा: आइतबार, २०८३ जेठ ३०',
			titlePlaceholder: 'उत्पादन शीर्षक',
			weightPlaceholder: '२ तोला',
			descriptionPlaceholder: 'उत्पादन विवरण',
			imageHint: 'तपाईंको उपकरणबाट PNG वा JPG फाइल छान्नुहोस्।',
			navRates: 'दर',
			navProducts: 'उत्पादन',
			navGallery: 'ग्यालरी',
			navInventory: 'सूची',
			navOrders: 'अर्डर',
			ratesKicker: 'बजार नियन्त्रण',
			ratesTitle: 'सुन / चाँदी दर अपडेट',
			saveRates: 'दर सुरक्षित गर्नुहोस्',
			goldLabel: 'सुन दर',
			silverLabel: 'चाँदी',
			rateDateLabel: 'दिन / मिति',
			productsKicker: 'क्याटलग नियन्त्रण',
			addProductTitle: 'उत्पादन थप्नुहोस्',
			clearForm: 'फारम खाली गर्नुहोस्',
			titleLabel: 'शीर्षक',
			titleLabelNe: 'शीर्षक (ने) - वैकल्पिक',
			weightLabel: 'तौल',
			typeLabel: 'प्रकार',
			chooseType: 'प्रकार छान्नुहोस्',
			typeGold: 'सुन',
			typeSilver: 'चाँदी',
			typeDiamond: 'हीरा',
			typeGoldSilver: 'सुन / चाँदी',
			typeGoldDiamond: 'सुन / हीरा',
			categoryLabel: 'वर्ग',
			chooseCategory: 'वर्ग छान्नुहोस्',
			categoryRings: 'औंठी',
			categoryNecklaces: 'हार',
			categoryBracelets: 'बाला',
			categoryEarrings: 'कानको गहना',
			categoryOthers: 'अन्य',
			descriptionLabel: 'विवरण',
			descriptionLabelNe: 'विवरण (ने) - वैकल्पिक',
			imageLabel: 'तस्बिर संलग्न गर्नुहोस्',
			addProductButton: 'उत्पादन थप्नुहोस्',
			inventoryKicker: 'उत्पादन सूची',
			allProductsTitle: 'डिफल्ट उत्पादनहरू',
			tableTitle: 'शीर्षक',
			tableImage: 'तस्बिर',
			tableWeight: 'तौल',
			tableType: 'प्रकार',
			tableCategory: 'वर्ग',
			tableActions: 'कार्यहरू',
			tableDescription: 'विवरण',
				tableFeature: 'विशेष',
				featureButton: 'विशेष',
				featureLimitMessage: 'तपाईंले होमपेजमा अधिकतम ४ विशेष वस्तु मात्र प्रदर्शन गर्न सक्नुहुन्छ। कृपया पहिले कुनै वस्तु अनफिचर गर्नुहोस्।',
			updateProductButton: 'उत्पादन अपडेट गर्नुहोस्',
			editButton: 'सम्पादन',
			deleteButton: 'मेटाउनुहोस्',
			ordersTitle: 'अर्डर',
			ordersText: 'पछि अर्डर समीक्षा, ग्राहक सन्देश र छिटो जवाफका लागि यो भाग प्रयोग गर्न सक्नुहुन्छ।',
			galleryKicker: 'होमपेज मिडिया',
			galleryTitle: 'ग्यालरी नियन्त्रण',
			galleryIntro: 'होमपेज ग्यालरीका ४ तस्बिर र ४ भिडियो व्यवस्थापन गर्नुहोस्।',
			galleryImagesTitle: 'तस्बिरहरू',
			galleryVideosTitle: 'भिडियोहरू',
			galleryImageHint: 'तस्बिरहरू स्वतः कम्प्रेस हुन्छन्। छिटोका लागि 10 MB भन्दा कम साइज प्रयोग गर्नुहोस्।',
			galleryVideoHint: 'भिडियोहरू जस्ताको तस्तै अपलोड हुन्छन्। छिटोका लागि 10 MB भन्दा कम साइज प्रयोग गर्नुहोस्।',
			galleryImage1: 'तस्बिर १',
			galleryImage2: 'तस्बिर २',
			galleryImage3: 'तस्बिर ३',
			galleryImage4: 'तस्बिर ४',
			galleryVideo1: 'भिडियो १',
			galleryVideo2: 'भिडियो २',
			galleryVideo3: 'भिडियो ३',
			galleryVideo4: 'भिडियो ४',
			galleryUpdateButton: 'अपडेट गर्नुहोस्',
			galleryPlaceholder: 'एसेट छैन',
			galleryUploading: 'एसेट अपलोड हुँदैछ...',
			galleryUploadText: 'कृपया प्रतिक्षा गर्नुहोस्।',
			galleryUpdated: 'ग्यालरी स्लट सफलतापूर्वक अपडेट भयो!',
			galleryChooseFile: 'कृपया पहिले फाइल छान्नुहोस्।',
			galleryCancelUpload: 'अपलोड रद्द गर्नुहोस्',
			galleryUploadingKeep: 'अपलोड जारी राख्नुहोस्',
			galleryUploadFailed: 'अपलोड असफल भयो। फेरि प्रयास गर्नुहोस्।',
			rateSaved: 'दर सुरक्षित भयो',
			productAdded: 'उत्पादन सुरक्षित भयो',
			productUpdated: 'उत्पादन अपडेट भयो',
			productDeleted: 'उत्पादन मेटाइयो',
			dashboardTitle: 'स्वागत छ, एडमिन।',
			dashboardIntro: 'यो सुरक्षित ड्यासबोर्ड तपाईंको गहना वेबसाइटको सामग्री व्यवस्थापनका लागि हो। पछि यहाँ उत्पादन व्यवस्थापन, विशेष वस्तु सम्पादन, र अर्डर ह्यान्डलिङ थप्न सक्नुहुन्छ।',
			statusLabel: 'स्थिति',
			signedInLabel: 'लगइन भएको',
			themeLabel: 'थिम',
			quickActionsTitle: 'छिटो कार्यहरू',
			quickActionsText: 'एडमिन सुविधाहरू थप्दा यहाँ छिटो पहुँचका विकल्प राख्न सक्नुहुन्छ।',
			chip1: 'उत्पादन सम्पादन',
			chip2: 'विशेष वस्तु अपडेट',
			chip3: 'मुख्य लेखन व्यवस्थापन',
			chip4: 'सोधपुछ समीक्षा',
			contentTitle: 'सामग्री व्यवस्थापन',
			contentText: 'उत्पादनका फोटो, तौल, विवरण र उपलब्धता अपडेट गर्ने टुलहरू यहाँ थप्न सक्नुहुन्छ।',
			securityTitle: 'सुरक्षा',
			securityText: 'यो ड्यासबोर्डले खुल्नेबित्तिकै साइन-इन अवस्था जाँच गर्छ। अवस्था नभए लगइन पेजमा फर्काइन्छ।',
			logout: 'बाहिर निस्कनुहोस्',
			checking: 'जाँचिँदैछ...',
			loading: 'लोड हुँदैछ...',
			online: 'अनलाइन',
			adminUser: 'एडमिन प्रयोगकर्ता',
			themeValue: 'सुन / क्रीम',
			langButton: 'En'
		}
	};

	const iconMarkup = {
		feature:
			'<svg class="action-icon action-icon-feature" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.4l2.72 5.8 6.4.95-4.62 4.5 1.1 6.35L12 17.1l-5.6 2.9 1.1-6.35-4.62-4.5 6.4-.95L12 2.4z"></path></svg>',
		edit:
			'<svg class="action-icon action-icon-edit" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 17.25V21h3.75L19.8 7.95l-3.75-3.75L3 17.25z"></path><path d="M20.7 6.05c.4-.4.4-1.02 0-1.42l-1.33-1.33c-.4-.4-1.02-.4-1.42 0l-1.12 1.12 3.75 3.75 1.12-1.12z"></path></svg>',
		delete:
			'<svg class="action-icon action-icon-delete" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 7h12l-1 13H7L6 7z"></path><path d="M9 4h6l1 2H8l1-2z"></path><path d="M10 10h2v7h-2zm4 0h2v7h-2z"></path></svg>'
	};

	const canUseSwal = () => window.Swal && typeof Swal.fire === 'function';

	const swalTheme = {
		background: '#fffdf8',
		color: '#1f1a14',
		confirmButtonColor: '#d4a437',
		cancelButtonColor: '#8a6f43'
	};

	const showToast = ({ icon = 'success', title = '', text = '' }) => {
		if (!canUseSwal()) {
			if (title || text) {
				window.alert(text ? `${title} ${text}`.trim() : title);
			}
			return;
		}
		Swal.fire({
			toast: false,
			position: 'center',
			icon,
			title,
			text,
			showConfirmButton: false,
			timer: 2200,
			timerProgressBar: true,
			backdrop: 'rgba(31, 26, 20, 0.35)',
			allowOutsideClick: true,
			background: swalTheme.background,
			color: swalTheme.color,
			customClass: {
				popup: 'admin-swal-popup admin-swal-center',
				title: 'admin-swal-title',
				htmlContainer: 'admin-swal-text'
			}
		});
	};

	const showConfirmDelete = () => {
		if (!canUseSwal()) {
			return Promise.resolve({ isConfirmed: window.confirm('Are you sure you want to delete this item?') });
		}
		return Swal.fire({
			title: 'Are you sure?',
			text: 'You want to delete this item from your inventory?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#e74c3c',
			cancelButtonColor: swalTheme.cancelButtonColor,
			confirmButtonText: 'Yes, delete it!',
			background: swalTheme.background,
			color: swalTheme.color,
			customClass: {
				popup: 'admin-swal-popup',
				title: 'admin-swal-title',
				htmlContainer: 'admin-swal-text',
				confirmButton: 'admin-swal-confirm admin-swal-confirm-danger',
				cancelButton: 'admin-swal-cancel'
			}
		});
	};

	const showDeleted = () => {
		if (!canUseSwal()) {
			window.alert('Product has been removed.');
			return;
		}
		Swal.fire({
			title: 'Deleted!',
			text: 'Product has been removed.',
			icon: 'success',
			background: swalTheme.background,
			color: swalTheme.color,
			confirmButtonColor: swalTheme.confirmButtonColor,
			customClass: {
				popup: 'admin-swal-popup',
				title: 'admin-swal-title',
				htmlContainer: 'admin-swal-text',
				confirmButton: 'admin-swal-confirm'
			}
		});
	};

	const getCreatedAtValue = (item) => {
		const createdAt = item?.createdAt;
		if (createdAt && typeof createdAt.toMillis === 'function') {
			return createdAt.toMillis();
		}
		if (typeof createdAt === 'number') {
			return createdAt;
		}
		if (typeof createdAt === 'string') {
			const parsed = Date.parse(createdAt);
			return Number.isNaN(parsed) ? 0 : parsed;
		}
		return typeof item?._updatedAt === 'number' ? item._updatedAt : 0;
	};

	const isCustomProduct = (item) => {
		const title = String(item?.title || item?.titleNe || item?.name?.en || item?.name?.ne || '').toLowerCase();
		return title.includes('custom') || title.includes('कस्टम') || item?.id === 'p-020';
	};

	const sortByCreatedAtAsc = (list) => list.slice().sort((a, b) => {
		const aCustom = isCustomProduct(a);
		const bCustom = isCustomProduct(b);
		if (aCustom && !bCustom) return 1;
		if (!aCustom && bCustom) return -1;
		return getCreatedAtValue(a) - getCreatedAtValue(b);
	});

	const pageType = document.body.dataset.page;
	const langToggle = document.getElementById('langToggle');
	const currentLang = () => localStorage.getItem('adminLang') || 'en';

	const setLang = (lang) => {
		localStorage.setItem('adminLang', lang);
		document.documentElement.lang = lang === 'ne' ? 'ne' : 'en';

		const t = translations[lang] || translations.en;
		document.querySelectorAll('[data-i18n]').forEach((node) => {
			const key = node.getAttribute('data-i18n');
			if (t[key]) {
				node.textContent = t[key];
			}
		});

		document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
			const key = node.getAttribute('data-i18n-placeholder');
			if (t[key]) {
				node.setAttribute('placeholder', t[key]);
			}
		});

		if (langToggle) {
			langToggle.textContent = t.langButton;
			langToggle.setAttribute('aria-label', lang === 'ne' ? 'Switch to English' : 'नेपालीमा बदल्नुहोस्');
		}
	};

	if (langToggle) {
		langToggle.addEventListener('click', () => {
			setLang(currentLang() === 'en' ? 'ne' : 'en');
		});
	}

	setLang(currentLang());

	if (pageType === 'login') {
		const auth = firebase.auth();
		const form = document.getElementById('loginForm');
		const identifierInput = document.getElementById('identifier');
		const passwordInput = document.getElementById('password');
		const loginButton = document.getElementById('loginButton');
		const errorMessage = document.getElementById('errorMessage');
		const showPassword = document.getElementById('showPassword');
		const loginFields = [identifierInput, passwordInput, showPassword].filter(Boolean);
		const getLoginButtonLabel = () => (translations[currentLang()] || translations.en).loginButton;

		const refreshLoginCopy = () => {
			const t = translations[currentLang()] || translations.en;
			document.title = currentLang() === 'ne' ? 'एडमिन लगइन | श्री गणपति ज्वैलर्स' : 'Admin Login | Shree Ganapati Jewellers';
			document.querySelector('[data-i18n="loginTitle"]').textContent = t.loginTitle;
			document.querySelector('[data-i18n="loginIntro"]').textContent = t.loginIntro;
			document.querySelector('[data-i18n="loginNote"]').textContent = t.loginNote;
			document.querySelector('[data-i18n="welcomeBack"]').textContent = t.welcomeBack;
			document.querySelector('[data-i18n="welcomeText"]').textContent = t.welcomeText;
			document.querySelector('label[for="identifier"]').textContent = t.identifierLabel;
			document.querySelector('label[for="password"]').textContent = t.passwordLabel;
			identifierInput.setAttribute('placeholder', t.identifierPlaceholder);
			passwordInput.setAttribute('placeholder', t.passwordPlaceholder);
			document.querySelector('label[for="showPassword"] span').textContent = t.showPassword;
			document.querySelector('[data-i18n="backToSite"]').textContent = t.backToSite;
			loginButton.textContent = getLoginButtonLabel();
			document.querySelector('[data-i18n="helperText"]').textContent = t.helperText;
		};

		const setLoginLoading = (isLoading) => {
			const t = translations[currentLang()] || translations.en;
			loginButton.disabled = isLoading;
			loginButton.classList.toggle('is-loading', isLoading);
			loginButton.textContent = isLoading ? `${t.loggingIn}...` : getLoginButtonLabel();
			loginFields.forEach((field) => {
				field.disabled = isLoading;
			});
			if (showPassword) {
				showPassword.disabled = isLoading;
			}
		};

		const showError = (message) => {
			errorMessage.textContent = message;
			errorMessage.style.display = 'block';
		};

		const hideError = () => {
			errorMessage.textContent = '';
			errorMessage.style.display = 'none';
		};

		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			hideError();

			const identifier = identifierInput.value.trim();
			const password = passwordInput.value;
			const t = translations[currentLang()] || translations.en;

			if (!identifier || !password) {
				showError(t.requiredError);
				return;
			}

			setLoginLoading(true);
			await new Promise((resolve) => window.requestAnimationFrame(resolve));

			try {
				await auth.signInWithEmailAndPassword(identifier, password);
				window.location.href = 'dashboard.html';
			} catch (error) {
				showError(error?.message || t.loginFailed);
				setLoginLoading(false);
			}
		});

		showPassword.addEventListener('change', () => {
			passwordInput.type = showPassword.checked ? 'text' : 'password';
		});

		refreshLoginCopy();

		const observer = new MutationObserver(refreshLoginCopy);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
	}

	if (pageType === 'dashboard') {
		const hasAuth = window.firebase && typeof firebase.auth === 'function';
		const auth = hasAuth ? firebase.auth() : null;
		const authStatus = document.getElementById('authStatus');
		const userEmail = document.getElementById('userEmail');
		const logoutButton = document.getElementById('logoutButton');
		const productForm = document.getElementById('productForm');
		const productTableBody = document.getElementById('productTableBody');
		const productCardList = document.getElementById('productCardList');
		const productTitle = document.getElementById('productTitle');
		const productTitleNe = document.getElementById('productTitleNe');
		const productWeight = document.getElementById('productWeight');
		const productType = document.getElementById('productType');
		const productCategory = document.getElementById('productCategory');
		const productDescription = document.getElementById('productDescription');
		const productDescriptionNe = document.getElementById('productDescriptionNe');
		const productImageFile = document.getElementById('productImageFile');
		const clearFormButton = document.querySelector('[data-i18n="clearForm"]');
		const saveRatesButton = document.querySelector('[data-i18n="saveRates"]');
		const rateInputs = Array.from(document.querySelectorAll('[data-rate-input]'));
		const rateStoreKey = 'adminDashboardRates';
		const productStoreKey = 'adminDashboardProducts';
		let editingProductId = null;
		let editingImageUrl = '';
		const gallerySlots = [
			{ key: 'img1', type: 'image' },
			{ key: 'img2', type: 'image' },
			{ key: 'img3', type: 'image' },
			{ key: 'img4', type: 'image' },
			{ key: 'vid1', type: 'video' },
			{ key: 'vid2', type: 'video' },
			{ key: 'vid3', type: 'video' },
			{ key: 'vid4', type: 'video' }
		];
		const gallerySlotElements = gallerySlots.map((slot) => {
			const preview = document.querySelector(`[data-gallery-preview="${slot.key}"]`);
			return {
				key: slot.key,
				type: slot.type,
				preview,
				img: document.querySelector(`[data-gallery-preview-img="${slot.key}"]`),
				video: document.querySelector(`[data-gallery-preview-video="${slot.key}"]`),
				input: document.querySelector(`[data-gallery-input="${slot.key}"]`),
				button: document.querySelector(`[data-gallery-update="${slot.key}"]`)
			};
		}).filter((slot) => slot.preview && slot.input && slot.button);
		let unsubscribeGallery = null;

		const seededProducts = [
			{ id: 'p-001', title: 'Rani Haar', weight: '2 तोला देखि 10 तोला', type: 'Gold', category: 'necklaces', description: 'Royal bridal necklace set for festive and wedding looks.', imageUrl: '../img/ranihaar.webp' },
			{ id: 'p-002', title: 'Short Haar', weight: '2 tola', type: 'Gold', category: 'necklaces', description: 'Compact short haar with refined traditional styling.', imageUrl: '../img/short_haar.webp' },
			{ id: 'p-003', title: 'Chadke Tilhari', weight: '1 tola', type: 'Gold', category: 'necklaces', description: 'Traditional chadke tilhari with cultural detailing.', imageUrl: '../img/chadke_tilhari.webp' },
			{ id: 'p-004', title: 'Maili Tilhari', weight: '2 आना देखि 8 आना', type: 'Gold', category: 'necklaces', description: 'Classic maili tilhari in a flexible weight range.', imageUrl: '../img/maili_tilhari.webp' },
			{ id: 'p-005', title: 'Shirbandi', weight: '3 आना देखि 8 आना', type: 'Gold', category: 'others', description: 'Elegant shirbandi for bridal head styling.', imageUrl: '../img/shirbandi.webp' },
			{ id: 'p-006', title: 'Chandrama Clip', weight: '1 आना देखि 4 आना', type: 'Gold', category: 'others', description: 'Graceful chandrama clip for festive wear.', imageUrl: '../img/chandrama_clip.webp' },
			{ id: 'p-007', title: 'Buttedar Pata Baala', weight: '2 tola देखि 4 tola', type: 'Gold / Silver', category: 'bracelets', description: 'Engraved balaa with a rich traditional finish.', imageUrl: '../img/balaa.webp' },
			{ id: 'p-008', title: 'Stone Bracelet', weight: '3 tola देखि 5 tola', type: 'Gold / Silver', category: 'bracelets', description: 'Modern stone bracelet with stylish finish.', imageUrl: '../img/stone_bracelet.webp' },
			{ id: 'p-009', title: 'Rashi Ring', weight: '7 आना देखि 1 तोला', type: 'Gold', category: 'rings', description: 'Astrology-guided ring crafted in custom style.', imageUrl: '../img/rashi_ring.webp' },
			{ id: 'p-010', title: 'Mundra', weight: '2 आना देखि 8 आना', type: 'Gold / Silver', category: 'earrings', description: 'Attractive mundra for daily and festive wear.', imageUrl: '../img/mundra.webp' },
			{ id: 'p-011', title: 'Jhumka', weight: '1.5 tola देखि 3.5 tola', type: 'Gold', category: 'earrings', description: 'Bridal jhumka with layered festive styling.', imageUrl: '../img/jhumka.webp' },
			{ id: 'p-012', title: 'Gold Top', weight: '4 आना देखि 11 आना', type: 'Gold', category: 'earrings', description: 'Lightweight gold top with custom motif patterns.', imageUrl: '../img/gold_top.webp' },
			{ id: 'p-013', title: 'Top Tiki', weight: '3 आना देखि 8 आना', type: 'Gold', category: 'others', description: 'Top tiki design for modern and traditional styling.', imageUrl: '../img/top_tiki.webp' },
			{ id: 'p-014', title: 'Phuli', weight: '1 आना देखि 5 आना', type: 'Gold', category: 'others', description: 'Elegant nose jewelry in minimal to ornate motifs.', imageUrl: '../img/phuli.webp' },
			{ id: 'p-015', title: 'Naugedi', weight: '4 आना देखि 8 आना', type: 'Gold', category: 'necklaces', description: 'Naugedi design with fine traditional detailing.', imageUrl: '../img/naugedi.webp' },
			{ id: 'p-016', title: 'Jantar', weight: '1 आना देखि 4 आना', type: 'Gold', category: 'necklaces', description: 'Handcrafted jantar with classic design language.', imageUrl: '../img/jantar.webp' },
			{ id: 'p-017', title: 'Barahpuri Sikri', weight: '1 तोला देखि 3 तोला', type: 'Gold / Silver', category: 'necklaces', description: 'Prestige collection sikri with a royal finish.', imageUrl: '../img/barahpuri_sikri.webp' },
			{ id: 'p-018', title: 'Silver Pauju', weight: '5 tola देखि 15 tola', type: 'Silver', category: 'bracelets', description: 'Traditional silver pauju with ornamental motifs.', imageUrl: '../img/silver_pauju.webp' },
			{ id: 'p-019', title: 'Engagement Ring', weight: '6 आना देखि 1 तोला', type: 'Gold / Diamond', category: 'rings', description: 'Elegant engagement ring with diamond detailing.', imageUrl: '../img/ring.webp' },
			{ id: 'p-020', title: 'Custom Making Service', weight: 'रोजाइ अनुसार', type: 'Gold / Silver', category: 'others', description: 'Custom jewellery making service for special orders.', imageUrl: '../img/custom_making.webp' }
		];

		const loadStoredProducts = () => {
			try {
				const stored = JSON.parse(localStorage.getItem(productStoreKey) || 'null');
				return Array.isArray(stored) && stored.length ? stored : seededProducts;
			} catch (error) {
				return seededProducts;
			}
		};

		let products = loadStoredProducts();
		let unsubscribeProducts = null;

		const loadRates = () => {
			try {
				const stored = JSON.parse(localStorage.getItem(rateStoreKey) || '{"gold":"","silver":"","rateDate":""}');
				if (stored && typeof stored === 'object') {
					return {
						gold: stored.gold || stored.gold24 || stored.gold18 || '',
						silver: stored.silver || '',
						rateDate: stored.rateDate || stored.dayDate || ''
					};
				}
				return { gold: '', silver: '', rateDate: '' };
			} catch (error) {
				return { gold: '', silver: '', rateDate: '' };
			}
		};

		// Firestore helpers (compat API). Fall back to localStorage when Firestore is unavailable.
		const hasFirestore = () => window.firebase && typeof firebase.firestore === 'function';

		const persistProducts = async () => {
			if (hasFirestore()) {
				// push local 'products' array to Firestore (merge)
				const db = firebase.firestore();
				const batch = db.batch();
				products.forEach((p) => {
					if (p._docId) {
						const ref = db.collection('products').doc(p._docId);
						batch.set(ref, Object.assign({}, p, { id: p.id }), { merge: true });
					} else {
						const ref = db.collection('products').doc();
						p._docId = ref.id;
						batch.set(ref, Object.assign({}, p, { id: p.id }));
					}
				});
				try {
					await batch.commit();
				} catch (e) {
					console.warn('Firestore persistProducts failed, falling back to localStorage', e);
					localStorage.setItem(productStoreKey, JSON.stringify(products));
				}
			} else {
				localStorage.setItem(productStoreKey, JSON.stringify(products));
			}
		};

		const persistRates = async (rates) => {
			if (hasFirestore()) {
				const db = firebase.firestore();
				try {
					await db.collection('settings').doc('live_rates').set(rates, { merge: true });
				} catch (e) {
					console.warn('Failed saving rates to Firestore, saving to localStorage', e);
					localStorage.setItem(rateStoreKey, JSON.stringify(rates));
				}
			} else {
				localStorage.setItem(rateStoreKey, JSON.stringify(rates));
			}
		};

		const hasStorage = () => window.firebase && typeof firebase.storage === 'function';

		const getStorage = () => {
			if (!hasStorage()) {
				return null;
			}

			return firebase.storage();
		};

		const getStoragePath = (folder, itemId, fileName) => {
			const safeFolder = String(folder || 'uploads').replace(/[^a-zA-Z0-9/_-]/g, '-');
			const safeItemId = String(itemId || 'item').replace(/[^a-zA-Z0-9._-]/g, '-');
			const safeName = String(fileName || 'file').replace(/[^a-zA-Z0-9._-]/g, '-');
			return `${safeFolder}/${safeItemId}/${Date.now()}-${safeName}`;
		};

		const uploadFileToStorage = (file, path, options = {}) => new Promise((resolve, reject) => {
			const storage = getStorage();
			if (!storage || !file) {
				reject(new Error('Firebase Storage is unavailable'));
				return;
			}

			const ref = storage.ref().child(path);
			const uploadTask = ref.put(file, {
				contentType: file.type || 'application/octet-stream'
			});

			const abortHandler = () => {
				if (uploadTask && typeof uploadTask.cancel === 'function') {
					uploadTask.cancel();
				}
			};

			if (options.signal) {
				options.signal.addEventListener('abort', abortHandler, { once: true });
			}

			uploadTask.on('state_changed', (snapshot) => {
				if (typeof options.onProgress !== 'function') return;
				if (snapshot.totalBytes > 0) {
					const percent = Math.min(100, Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
					options.onProgress(percent);
				}
			}, (error) => {
				if (options.signal) {
					options.signal.removeEventListener('abort', abortHandler);
				}
				reject(error);
			}, async () => {
				try {
					if (options.signal) {
						options.signal.removeEventListener('abort', abortHandler);
					}
					resolve(await uploadTask.snapshot.ref.getDownloadURL());
				} catch (error) {
					reject(error);
				}
			});
		});

		const uploadProductImage = (file, productId) => (
			uploadFileToStorage(file, getStoragePath('products', productId, file.name))
		);

		const uploadGalleryFile = (file, slot, options = {}) => (
			uploadFileToStorage(file, getStoragePath(`gallery/${slot.type}s`, slot.key, file.name), options)
		);

		const showGalleryLoading = (t, onCancel, options = {}) => {
			if (!canUseSwal()) {
				return;
			}
			const showProgress = !!options.showProgress;
			const progressMarkup = showProgress
				? '<div class="gallery-upload-status">' +
					'<div class="gallery-upload-progress"><span id="galleryUploadBar"></span></div>' +
					'<div class="gallery-upload-percent" id="galleryUploadPercent">0%</div>' +
					'</div>'
				: '';
			Swal.fire({
				title: t.galleryUploading,
				html: `<p class="gallery-upload-text">${t.galleryUploadText}</p>${progressMarkup}`,
				showCancelButton: true,
				confirmButtonText: t.galleryUploadingKeep,
				cancelButtonText: t.galleryCancelUpload,
				allowOutsideClick: false,
				allowEscapeKey: false,
				background: swalTheme.background,
				color: swalTheme.color,
				customClass: {
					popup: 'admin-swal-popup',
					title: 'admin-swal-title',
					htmlContainer: 'admin-swal-text',
					cancelButton: 'admin-swal-cancel',
					confirmButton: 'admin-swal-confirm'
				},
				didOpen: () => {
					Swal.showLoading();
				}
			}).then((result) => {
				if (result.dismiss === Swal.DismissReason.cancel && typeof onCancel === 'function') {
					onCancel();
				}
			});
		};

		const updateGalleryProgress = (percent) => {
			const percentNode = document.getElementById('galleryUploadPercent');
			const barNode = document.getElementById('galleryUploadBar');
			if (percentNode) {
				percentNode.textContent = `${percent}%`;
			}
			if (barNode) {
				barNode.style.width = `${percent}%`;
			}
		};

		const showGalleryResult = (t, { icon, title, text = '' }) => {
			if (!canUseSwal()) {
				if (title || text) {
					window.alert(text ? `${title} ${text}`.trim() : title);
				}
				return;
			}
			Swal.fire({
				icon,
				title,
				text,
				showConfirmButton: false,
				timer: 1800,
				background: swalTheme.background,
				color: swalTheme.color,
				customClass: {
					popup: 'admin-swal-popup admin-swal-center',
					title: 'admin-swal-title',
					htmlContainer: 'admin-swal-text'
				}
			});
		};

		const renderGallerySlot = (slot, value) => {
			if (!slot.preview) return;
			const hasValue = typeof value === 'string' && value.trim().length > 0;
			slot.preview.classList.toggle('is-filled', hasValue);
			if (slot.type === 'image' && slot.img) {
				if (hasValue) {
					slot.img.src = value;
				} else {
					slot.img.removeAttribute('src');
				}
			}
			if (slot.type === 'video' && slot.video) {
				if (hasValue) {
					slot.video.src = value;
					slot.video.load();
				} else {
					slot.video.removeAttribute('src');
					slot.video.load();
				}
			}
		};

		const renderGalleryState = (data = {}) => {
			gallerySlotElements.forEach((slot) => {
				renderGallerySlot(slot, data[slot.key] || '');
			});
		};

		const defaultGalleryData = {
			img1: '../img/gallery1.webp',
			img2: '../img/gallery2.webp',
			img3: '../img/gallery3.webp',
			img4: '../img/gallery4.webp',
			vid1: '../img/video.mp4',
			vid2: '../img/video1.mp4',
			vid3: '../img/video2.mp4',
			vid4: '../img/video3.mp4'
		};

		const loadGalleryControl = () => {
			if (!hasFirestore()) {
				renderGalleryState(defaultGalleryData);
				return;
			}

			if (unsubscribeGallery) {
				return;
			}

			const db = firebase.firestore();
			unsubscribeGallery = db.collection('gallery').doc('homepage_gallery').onSnapshot((doc) => {
				const data = doc.exists ? doc.data() : {};
				const merged = Object.assign({}, defaultGalleryData, data || {});
				renderGalleryState(merged);
			}, (error) => {
				console.warn('gallery snapshot failed', error);
				renderGalleryState(defaultGalleryData);
			});
		};

		const updateGallerySlot = async (slot) => {
			const t = translations[currentLang()] || translations.en;
			const file = slot.input && slot.input.files ? slot.input.files[0] : null;
			if (!file) {
				showGalleryResult(t, { icon: 'warning', title: t.galleryChooseFile });
				return;
			}

			if (!hasFirestore()) {
				showGalleryResult(t, { icon: 'error', title: t.galleryUploadFailed });
				return;
			}

			Swal.fire({
				title: t.galleryUploading,
				text: t.galleryUploadText,
				allowOutsideClick: false,
				allowEscapeKey: false,
				background: swalTheme.background,
				color: swalTheme.color,
				customClass: {
					popup: 'admin-swal-popup',
					title: 'admin-swal-title',
					htmlContainer: 'admin-swal-text'
				},
				didOpen: () => {
					Swal.showLoading();
				}
			});
			let galleryUrl = '';
			try {
				const cloudinaryData = new FormData();
				cloudinaryData.append('file', file);
				cloudinaryData.append('upload_preset', 'jewellery_preset');

				const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dzfts0dkn/upload', {
					method: 'POST',
					body: cloudinaryData
				});

				const cloudinaryJson = await cloudinaryResponse.json();

				if (!cloudinaryResponse.ok) {
					throw new Error(cloudinaryJson.error?.message || 'Cloudinary upload failed.');
				}

				galleryUrl = cloudinaryJson.secure_url;
			} catch (error) {
				console.warn('gallery upload failed', error);
				Swal.close();
				showGalleryResult(t, { icon: 'error', title: t.galleryUploadFailed });
				return;
			}

			const db = firebase.firestore();
			try {
				await db.collection('gallery').doc('homepage_gallery').update({
					[slot.key]: galleryUrl
				});
			} catch (error) {
				try {
					await db.collection('gallery').doc('homepage_gallery').set({
						[slot.key]: galleryUrl
					}, { merge: true });
				} catch (finalError) {
					console.warn('gallery update failed', finalError);
					Swal.close();
					showGalleryResult(t, { icon: 'error', title: t.galleryUploadFailed });
					return;
				}
			}

			Swal.close();
			renderGallerySlot(slot, galleryUrl);
			if (slot.input) {
				slot.input.value = '';
			}
			showGalleryResult(t, { icon: 'success', title: t.galleryUpdated });
		};

		const fillRates = () => {
			if (hasFirestore()) {
				const db = firebase.firestore();
				db.collection('settings').doc('live_rates').get().then((doc) => {
					const data = doc.exists ? doc.data() : loadRates();
					rateInputs.forEach((input) => {
						const key = input.getAttribute('data-rate-input');
						input.value = (data && data[key]) || '';
					});
				}).catch(() => {
					const rates = loadRates();
					rateInputs.forEach((input) => {
						const key = input.getAttribute('data-rate-input');
						input.value = rates[key] || '';
					});
				});
			} else {
				const rates = loadRates();
				rateInputs.forEach((input) => {
					const key = input.getAttribute('data-rate-input');
					input.value = rates[key] || '';
				});
			}
		};

		const clearForm = () => {
			editingProductId = null;
			productForm.reset();
			productTitleNe.value = '';
			productDescriptionNe.value = '';
			const t = translations[currentLang()] || translations.en;
			productForm.querySelector('button[type="submit"]').textContent = t.addProductButton;
		};

		const getLocalizedValue = (item, key, keyNe) => {
			const lang = currentLang();
			if (lang === 'ne') {
				return item[keyNe] || item[key] || '';
			}
			return item[key] || '';
		};

		const renderProducts = () => {
			const t = translations[currentLang()] || translations.en;
			const sortedProducts = sortByCreatedAtAsc(products);
			if (!sortedProducts.length) {
				productTableBody.innerHTML = `<tr><td colspan="8"><div class="empty-state">${t.allProductsTitle}</div></td></tr>`;
				if (productCardList) {
					productCardList.innerHTML = `<div class="product-card empty-card">${t.allProductsTitle}</div>`;
				}
				return;
			}

			productTableBody.innerHTML = sortedProducts.map((product, index) => {
				const titleEn = getLocalizedValue(product, 'title', 'titleNe') || '';
				const titleNe = product.titleNe || '';
				return `
				<tr>
						<td data-label="${t.tableImage}">
							<img class="product-thumb" src="${product.imageUrl || product.image || '../img/logo.webp'}" alt="${product.title || 'Product image'}">
						</td>
						<td class="product-title-cell" data-label="${t.tableTitle}">
							${titleEn}
							${titleNe ? `<span class="product-title-ne">${titleNe}</span>` : ''}
							<span class="product-subtext">#${String(index + 1).padStart(2, '0')}</span>
						</td>
						<td data-label="${t.tableWeight}">${product.weight}</td>
						<td data-label="${t.tableType}">${product.type}</td>
						<td data-label="${t.tableCategory}">${product.category}</td>
						<td data-label="${t.tableDescription}"><span class="product-desc">${getLocalizedValue(product, 'description', 'descriptionNe')}</span></td>
						<td data-label="${t.tableFeature}">
							<div class="action-row">
								<button type="button" class="small-button action-btn action-feature ${product.isFeatured ? 'featured' : ''}" data-action="feature" data-id="${product.id}" title="${t.featureButton}" aria-label="${t.featureButton}">${iconMarkup.feature}</button>
							</div>
						</td>
						<td data-label="${t.tableActions}">
							<div class="action-row">
								<button type="button" class="small-button action-btn action-edit" data-action="edit" data-id="${product.id}" title="${t.editButton}" aria-label="${t.editButton}">${iconMarkup.edit}</button>
								<button type="button" class="small-button action-btn action-delete" data-action="delete" data-id="${product.id}" title="${t.deleteButton}" aria-label="${t.deleteButton}">${iconMarkup.delete}</button>
							</div>
						</td>
				</tr>
				`;
			}).join('');

			if (productCardList) {
				productCardList.innerHTML = sortedProducts.map((product, index) => {
					const titleEn = getLocalizedValue(product, 'title', 'titleNe') || '';
					const titleNe = product.titleNe || '';
					const productId = `#${String(index + 1).padStart(2, '0')}`;
					const desc = getLocalizedValue(product, 'description', 'descriptionNe') || '';
					const imageSrc = product.imageUrl || product.image || '../img/logo.webp';
					return `
						<div class="product-card" data-product-id="${product.id}">
							<div class="product-card-main">
								<img class="product-card-thumb" src="${imageSrc}" alt="${titleEn || 'Product'}">
								<div class="product-card-info">
									<div class="product-card-title">${titleEn}</div>
									${titleNe ? `<div class="product-card-title-ne">${titleNe}</div>` : ''}
									<div class="product-card-id">${productId}</div>
									<div class="product-card-badges">
										<span class="product-badge">⚖️ ${product.weight || ''}</span>
										<span class="product-badge">🏷️ ${product.category || ''}</span>
										<span class="product-badge">💎 ${product.type || ''}</span>
									</div>
								</div>
							</div>
							${desc ? `<p class="product-card-desc">${desc}</p>` : ''}
							<div class="product-card-actions">
								<button type="button" class="small-button action-btn action-feature ${product.isFeatured ? 'featured' : ''}" data-action="feature" data-id="${product.id}" title="${t.featureButton}" aria-label="${t.featureButton}">${iconMarkup.feature}</button>
								<button type="button" class="small-button action-btn action-edit" data-action="edit" data-id="${product.id}" title="${t.editButton}" aria-label="${t.editButton}">${iconMarkup.edit}</button>
								<button type="button" class="small-button action-btn action-delete" data-action="delete" data-id="${product.id}" title="${t.deleteButton}" aria-label="${t.deleteButton}">${iconMarkup.delete}</button>
							</div>
						</div>
					`;
				}).join('');
			}
		};

		const refreshDashboardCopy = () => {
			const t = translations[currentLang()] || translations.en;
			document.title = currentLang() === 'ne' ? 'एडमिन ड्यासबोर्ड | श्री गणपति ज्वैलर्स' : 'Admin Dashboard | Shree Ganapati Jewellers';
			const dashboardTitle = document.querySelector('[data-i18n="dashboardTitle"]');
			const dashboardIntro = document.querySelector('[data-i18n="dashboardIntro"]');
			const statusLabel = document.querySelector('[data-i18n="statusLabel"]');
			const signedInLabel = document.querySelector('[data-i18n="signedInLabel"]');
			const themeLabel = document.querySelector('[data-i18n="themeLabel"]');
			const ratesKicker = document.querySelector('[data-i18n="ratesKicker"]');
			const ratesTitle = document.querySelector('[data-i18n="ratesTitle"]');
			const saveRates = document.querySelector('[data-i18n="saveRates"]');
			const goldLabel = document.querySelector('[data-i18n="goldLabel"]');
			const silverLabel = document.querySelector('[data-i18n="silverLabel"]');
			const rateDateLabel = document.querySelector('[data-i18n="rateDateLabel"]');
			const rateDatePlaceholder = document.querySelector('[data-i18n-placeholder="rateDatePlaceholder"]');
			const productsKicker = document.querySelector('[data-i18n="productsKicker"]');
			const addProductTitle = document.querySelector('[data-i18n="addProductTitle"]');
			const clearFormLabel = document.querySelector('[data-i18n="clearForm"]');
			const titleLabel = document.querySelector('[data-i18n="titleLabel"]');
			const titleLabelNe = document.querySelector('[data-i18n="titleLabelNe"]');
			const weightLabel = document.querySelector('[data-i18n="weightLabel"]');
			const typeLabel = document.querySelector('[data-i18n="typeLabel"]');
			const chooseType = document.querySelector('[data-i18n="chooseType"]');
			const categoryLabel = document.querySelector('[data-i18n="categoryLabel"]');
			const chooseCategory = document.querySelector('[data-i18n="chooseCategory"]');
			const descriptionLabel = document.querySelector('[data-i18n="descriptionLabel"]');
			const descriptionLabelNe = document.querySelector('[data-i18n="descriptionLabelNe"]');
			const imageLabel = document.querySelector('[data-i18n="imageLabel"]');
			const imageHint = document.querySelector('[data-i18n="imageHint"]');
			const addProductButton = document.querySelector('[data-i18n="addProductButton"]');
			const inventoryKicker = document.querySelector('[data-i18n="inventoryKicker"]');
			const allProductsTitle = document.querySelector('[data-i18n="allProductsTitle"]');
			const tableTitle = document.querySelector('[data-i18n="tableTitle"]');
			const tableWeight = document.querySelector('[data-i18n="tableWeight"]');
			const tableType = document.querySelector('[data-i18n="tableType"]');
			const tableCategory = document.querySelector('[data-i18n="tableCategory"]');
			const tableActions = document.querySelector('[data-i18n="tableActions"]');
			const ordersTitle = document.querySelector('[data-i18n="ordersTitle"]');
			const ordersText = document.querySelector('[data-i18n="ordersText"]');
			const navRates = document.querySelector('[data-i18n="navRates"]');
			const navProducts = document.querySelector('[data-i18n="navProducts"]');
			const navGallery = document.querySelector('[data-i18n="navGallery"]');
			const navInventory = document.querySelector('[data-i18n="navInventory"]');
			const navOrders = document.querySelector('[data-i18n="navOrders"]');
			const galleryKicker = document.querySelector('[data-i18n="galleryKicker"]');
			const galleryTitle = document.querySelector('[data-i18n="galleryTitle"]');
			const galleryIntro = document.querySelector('[data-i18n="galleryIntro"]');
			const galleryImagesTitle = document.querySelector('[data-i18n="galleryImagesTitle"]');
			const galleryVideosTitle = document.querySelector('[data-i18n="galleryVideosTitle"]');
			const galleryImageHint = document.querySelector('[data-i18n="galleryImageHint"]');
			const galleryVideoHint = document.querySelector('[data-i18n="galleryVideoHint"]');

			if (dashboardTitle) dashboardTitle.textContent = t.dashboardTitle;
			if (dashboardIntro) dashboardIntro.textContent = t.dashboardIntro;
			if (statusLabel) statusLabel.textContent = t.statusLabel;
			if (signedInLabel) signedInLabel.textContent = t.signedInLabel;
			if (themeLabel) themeLabel.textContent = t.themeLabel;
			if (ratesKicker) ratesKicker.textContent = t.ratesKicker;
			if (ratesTitle) ratesTitle.textContent = t.ratesTitle;
			if (saveRates) saveRates.textContent = t.saveRates;
			if (goldLabel) goldLabel.textContent = t.goldLabel;
			if (silverLabel) silverLabel.textContent = t.silverLabel;
			if (rateDateLabel) rateDateLabel.textContent = t.rateDateLabel;
			if (rateDatePlaceholder) rateDatePlaceholder.setAttribute('placeholder', t.rateDatePlaceholder);
			if (productsKicker) productsKicker.textContent = t.productsKicker;
			if (addProductTitle) addProductTitle.textContent = t.addProductTitle;
			if (clearFormLabel) clearFormLabel.textContent = t.clearForm;
			if (titleLabel) titleLabel.textContent = t.titleLabel;
			if (titleLabelNe) titleLabelNe.textContent = t.titleLabelNe;
			if (weightLabel) weightLabel.textContent = t.weightLabel;
			if (typeLabel) typeLabel.textContent = t.typeLabel;
			if (chooseType) chooseType.textContent = t.chooseType;
			if (categoryLabel) categoryLabel.textContent = t.categoryLabel;
			if (chooseCategory) chooseCategory.textContent = t.chooseCategory;
			if (descriptionLabel) descriptionLabel.textContent = t.descriptionLabel;
			if (descriptionLabelNe) descriptionLabelNe.textContent = t.descriptionLabelNe;
			if (imageLabel) imageLabel.textContent = t.imageLabel;
			if (imageHint) imageHint.textContent = t.imageHint;
			if (addProductButton) addProductButton.textContent = t.addProductButton;
			if (inventoryKicker) inventoryKicker.textContent = t.inventoryKicker;
			if (allProductsTitle) allProductsTitle.textContent = t.allProductsTitle;
			if (tableTitle) tableTitle.textContent = t.tableTitle;
			if (tableWeight) tableWeight.textContent = t.tableWeight;
			if (tableType) tableType.textContent = t.tableType;
			if (tableCategory) tableCategory.textContent = t.tableCategory;
			const tableFeature = document.querySelector('[data-i18n="tableFeature"]');
			if (tableFeature) tableFeature.textContent = t.tableFeature;
			if (tableActions) tableActions.textContent = t.tableActions;
			if (ordersTitle) ordersTitle.textContent = t.ordersTitle;
			if (ordersText) ordersText.textContent = t.ordersText;
			if (navRates) navRates.textContent = t.navRates;
			if (navProducts) navProducts.textContent = t.navProducts;
			if (navGallery) navGallery.textContent = t.navGallery;
			if (navInventory) navInventory.textContent = t.navInventory;
			if (navOrders) navOrders.textContent = t.navOrders;
			if (galleryKicker) galleryKicker.textContent = t.galleryKicker;
			if (galleryTitle) galleryTitle.textContent = t.galleryTitle;
			if (galleryIntro) galleryIntro.textContent = t.galleryIntro;
			if (galleryImagesTitle) galleryImagesTitle.textContent = t.galleryImagesTitle;
			if (galleryVideosTitle) galleryVideosTitle.textContent = t.galleryVideosTitle;
			if (galleryImageHint) galleryImageHint.textContent = t.galleryImageHint;
			if (galleryVideoHint) galleryVideoHint.textContent = t.galleryVideoHint;
			document.querySelectorAll('[data-i18n="galleryImage1"]').forEach((node) => { node.textContent = t.galleryImage1; });
			document.querySelectorAll('[data-i18n="galleryImage2"]').forEach((node) => { node.textContent = t.galleryImage2; });
			document.querySelectorAll('[data-i18n="galleryImage3"]').forEach((node) => { node.textContent = t.galleryImage3; });
			document.querySelectorAll('[data-i18n="galleryImage4"]').forEach((node) => { node.textContent = t.galleryImage4; });
			document.querySelectorAll('[data-i18n="galleryVideo1"]').forEach((node) => { node.textContent = t.galleryVideo1; });
			document.querySelectorAll('[data-i18n="galleryVideo2"]').forEach((node) => { node.textContent = t.galleryVideo2; });
			document.querySelectorAll('[data-i18n="galleryVideo3"]').forEach((node) => { node.textContent = t.galleryVideo3; });
			document.querySelectorAll('[data-i18n="galleryVideo4"]').forEach((node) => { node.textContent = t.galleryVideo4; });
			document.querySelectorAll('[data-i18n="galleryUpdateButton"]').forEach((node) => { node.textContent = t.galleryUpdateButton; });
			document.querySelectorAll('[data-i18n="galleryPlaceholder"]').forEach((node) => { node.textContent = t.galleryPlaceholder; });
			logoutButton.textContent = t.logout;
			document.querySelector('[data-i18n="themeValue"]').textContent = t.themeValue;
			renderProducts();

			// Ensure auth status and signed-in copy follow current language immediately
			if (typeof auth !== 'undefined' && auth) {
				const user = auth.currentUser;
				authStatus.textContent = user ? t.online : t.loading;
				userEmail.textContent = user ? (user.email || t.adminUser) : t.adminUser;
			} else {
				authStatus.textContent = t.loading;
				userEmail.textContent = t.adminUser;
			}
		};

		// Toggle featured flag with a 4-item limit enforcement
		const toggleFeatured = async (productId) => {
			const item = products.find((p) => p.id === productId);
			if (!item) return;
			const currently = !!item.isFeatured;
			const t = translations[currentLang()] || translations.en;
			if (!hasFirestore()) {
				// local fallback
				const featuredCount = products.filter(p => p.isFeatured).length;
				if (!currently && featuredCount >= 4) {
					showToast({ icon: 'warning', title: t.featureButton, text: t.featureLimitMessage });
					return;
				}
				item.isFeatured = !currently;
				await persistProducts();
				renderProducts();
				return;
			}

			const db = firebase.firestore();
			try {
				if (!currently) {
					const snap = await db.collection('products').where('isFeatured', '==', true).get();
					if (snap.size >= 4) {
						showToast({ icon: 'warning', title: t.featureButton, text: t.featureLimitMessage });
						return;
					}
				}
				if (item._docId) {
					await db.collection('products').doc(item._docId).update({ isFeatured: !currently });
				} else {
					// not yet in Firestore: toggle locally and persist which will push to Firestore
					item.isFeatured = !currently;
					await persistProducts();
					renderProducts();
				}
			} catch (e) {
				console.warn('toggleFeatured failed', e);
				showToast({ icon: 'warning', title: t.featureButton, text: t.featureLimitMessage });
			}
		};

		const editProduct = (productId) => {
			const product = products.find((item) => item.id === productId);
			if (!product) {
				return;
			}

			editingProductId = product.id;
			editingImageUrl = product.imageUrl;
			productTitle.value = product.title;
			productTitleNe.value = product.titleNe || '';
			productWeight.value = product.weight;
			productType.value = product.type;
			productCategory.value = product.category;
			productDescription.value = product.description;
			productDescriptionNe.value = product.descriptionNe || '';
			productImageFile.value = '';
			const t = translations[currentLang()] || translations.en;
			productForm.querySelector('button[type="submit"]').textContent = t.updateProductButton;
			scrollToProductsForm();
		};

		const scrollToProductsForm = () => {
			const formContainer = document.getElementById('admin-form-container');
			const productsSection = document.getElementById('products');
			const scrollTarget = formContainer || productsSection;
			if (scrollTarget && typeof scrollTarget.scrollIntoView === 'function') {
				scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
			window.location.hash = '#products';
			productTitle.focus();
		};

		const deleteProduct = (productId) => {
			products = products.filter((item) => item.id !== productId);
			persistProducts();
			clearForm();
			renderProducts();
		};

		productForm.addEventListener('submit', async (event) => {
			event.preventDefault();

			const selectedFile = productImageFile.files && productImageFile.files[0];
			const t = translations[currentLang()] || translations.en;
			const requiredFields = [productTitle.value.trim(), productWeight.value.trim(), productType.value, productCategory.value, productDescription.value.trim()];
			if (requiredFields.some((v) => !v)) {
				showToast({
					icon: 'error',
					title: currentLang() === 'ne' ? 'कृपया सबै आवश्यक फिल्डहरू भर्नुहोस्।' : 'Please fill all required fields.'
				});
				return;
			}

			const productId = editingProductId || `p-${Date.now()}`;

			const buildProductObject = (imageData, docId, existingCreatedAt) => ({
				id: productId,
				title: productTitle.value.trim(),
				titleNe: productTitleNe.value.trim(),
				weight: productWeight.value.trim(),
				type: productType.value,
				category: productCategory.value,
				description: productDescription.value.trim(),
				descriptionNe: productDescriptionNe.value.trim(),
				image: imageData,
				imageUrl: imageData,
				createdAt: existingCreatedAt || (firebase && firebase.firestore ? firebase.firestore.FieldValue.serverTimestamp() : Date.now()),
				_updatedAt: Date.now(),
				_docId: docId || null
			});

			const saveToFirestore = async (productObj, docId) => {
				if (!hasFirestore()) return false;
				const db = firebase.firestore();
				try {
					if (docId) {
						await db.collection('products').doc(docId).set(productObj, { merge: true });
						productObj._docId = docId;
					} else {
						const ref = await db.collection('products').add(productObj);
						productObj._docId = ref.id;
					}
					return true;
				} catch (e) {
					console.warn('saveToFirestore failed', e);
					return false;
				}
			};

			const currentDoc = editingProductId ? products.find((item) => item.id === editingProductId) : null;
			const currentDocId = currentDoc && currentDoc._docId ? currentDoc._docId : null;
			let imageData = editingImageUrl || '';

			if (selectedFile) {
				try {
					const cloudinaryData = new FormData();
					cloudinaryData.append('file', selectedFile);
					cloudinaryData.append('upload_preset', 'jewellery_preset');

					Swal.fire({
						title: 'Uploading file...',
						text: 'Please wait while the file uploads in the background.',
						allowOutsideClick: false,
						allowEscapeKey: false,
						didOpen: () => {
							Swal.showLoading();
						}
					});

					const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dzfts0dkn/upload', {
						method: 'POST',
						body: cloudinaryData
					});

					const cloudinaryJson = await cloudinaryResponse.json();

					if (!cloudinaryResponse.ok) {
						throw new Error(cloudinaryJson.error?.message || 'Cloudinary upload failed.');
					}

					imageData = cloudinaryJson.secure_url;
					Swal.close();
				} catch (uploadError) {
					Swal.close();
					console.warn('Image upload failed', uploadError);
					showToast({
						icon: 'error',
						title: currentLang() === 'ne' ? 'तस्बिर अपलोड गर्न सकिएन।' : 'Image upload failed.'
					});
					return;
				}
			}

			if (!imageData) {
				imageData = '../img/model.webp';
				showToast({
					icon: 'info',
					title: currentLang() === 'ne'
						? 'तस्बिर छानिएको छैन। अस्थायी तस्बिरसँग सुरक्षित गरियो। पछि सम्पादन गरेर तस्बिर राख्नुहोस्।'
						: 'No image selected. Saved with a placeholder image. You can update it later.'
				});
			}

			const productObj = buildProductObject(imageData, currentDocId, currentDoc?.createdAt);

			if (hasFirestore()) {
				const ok = await saveToFirestore(productObj, currentDocId);
				if (ok) {
					clearForm();
					showToast({ icon: 'success', title: editingProductId ? t.productUpdated : t.productAdded });
					return;
				}
				showToast({
					icon: 'error',
					title: currentLang() === 'ne'
						? 'Firestore मा सुरक्षित गर्न सकेन। कृपया Firebase नियम/Storage जाँच गर्नुहोस्।'
						: 'Failed to save to Firestore. Please check Firebase rules/storage.'
				});
				// fallback to local so admin can still keep changes if Firestore is blocked
				products = editingProductId
					? products.map((item) => (item.id === editingProductId ? productObj : item))
					: [...products, productObj];
				await persistProducts();
				renderProducts();
				clearForm();
				return;
			}

			if (editingProductId) {
				products = products.map((item) => (item.id === editingProductId ? productObj : item));
			} else {
				products = [...products, productObj];
			}
			await persistProducts();
			clearForm();
			renderProducts();
		});

		clearFormButton.addEventListener('click', () => {
			editingImageUrl = '';
			clearForm();
		});

		saveRatesButton.addEventListener('click', () => {
			const rates = {};
			rateInputs.forEach((input) => {
				rates[input.getAttribute('data-rate-input')] = input.value.trim();
			});
			// save to Firestore if available
			persistRates(rates).then?.(()=>{
				// show simple feedback
				const t = translations[currentLang()] || translations.en;
				showToast({ icon: 'success', title: t.rateSaved });
			}).catch(()=>{
				const t = translations[currentLang()] || translations.en;
				showToast({ icon: 'success', title: t.rateSaved });
			});
		});

		gallerySlotElements.forEach((slot) => {
			slot.button.addEventListener('click', () => {
				updateGallerySlot(slot);
			});
		});

		// Realtime products loader (Firestore onSnapshot)
		const loadDashboardProducts = () => {
			if (!hasFirestore()) {
				products = sortByCreatedAtAsc(loadStoredProducts());
				renderProducts();
				return;
			}

			if (unsubscribeProducts) {
				return;
			}

			const db = firebase.firestore();
			unsubscribeProducts = db.collection('products').onSnapshot((snapshot) => {
				if (snapshot.empty) {
					products = sortByCreatedAtAsc(loadStoredProducts());
					renderProducts();
					return;
				}

				products = sortByCreatedAtAsc(snapshot.docs.map((doc) => {
					const data = doc.data() || {};
					let thumbUrl = data.imageUrl || data.image || '';
					if (thumbUrl.startsWith('img/')) {
						thumbUrl = `../${thumbUrl}`;
					}
					return Object.assign({}, data, { _docId: doc.id, imageUrl: thumbUrl });
				}));
				renderProducts();
			}, (error) => {
				console.warn('products snapshot failed', error);
				products = sortByCreatedAtAsc(loadStoredProducts());
				renderProducts();
			});
		};

		const deleteProductFirestore = async (docId) => {
			if (!hasFirestore()) return false;
			const db = firebase.firestore();
			try {
				await db.collection('products').doc(docId).delete();
				return true;
			} catch (e) {
				console.warn('deleteProductFirestore failed', e);
				return false;
			}
		};

		const editProductLoad = async (docId, itemId) => {
			// load the product into the form for editing
			if (hasFirestore() && docId) {
				const db = firebase.firestore();
				try {
					const doc = await db.collection('products').doc(docId).get();
					if (doc.exists) {
						const data = doc.data();
						editingProductId = data.id || itemId;
						editingImageUrl = data.imageUrl || '';
						productTitle.value = data.title || '';
						productTitleNe.value = data.titleNe || '';
						productWeight.value = data.weight || '';
						productType.value = data.type || '';
						productCategory.value = data.category || '';
						productDescription.value = data.description || '';
						productDescriptionNe.value = data.descriptionNe || '';
						productImageFile.value = '';
						const t = translations[currentLang()] || translations.en;
						productForm.querySelector('button[type="submit"]').textContent = t.updateProductButton;
						scrollToProductsForm();
					}
					return;
				} catch (e) {
					console.warn('editProductLoad failed', e);
				}
			}
			// fallback: local
			const product = products.find((p) => p.id === itemId);
			if (!product) return;
			editingProductId = product.id;
			editingImageUrl = product.imageUrl || '';
			productTitle.value = product.title;
			productTitleNe.value = product.titleNe || '';
			productWeight.value = product.weight;
			productType.value = product.type;
			productCategory.value = product.category;
			productDescription.value = product.description;
			productDescriptionNe.value = product.descriptionNe || '';
			productImageFile.value = '';
			const t = translations[currentLang()] || translations.en;
			productForm.querySelector('button[type="submit"]').textContent = t.updateProductButton;
			scrollToProductsForm();
		};

		// handle edit/delete actions for both Firestore and local fallback
		productTableBody.addEventListener('click', async (event) => {
			const button = event.target.closest('button[data-action]');
			if (!button) return;
			const { action, id } = button.dataset;
			const item = products.find(p => p.id === id) || {};
			const docId = item._docId || null;
			if (action === 'edit') {
				await editProductLoad(docId, id);
				return;
			}
			if (action === 'feature') {
				await toggleFeatured(id);
				return;
			}
			if (action === 'delete') {
				const result = await showConfirmDelete();
				if (!result.isConfirmed) return;
				if (docId) {
					const ok = await deleteProductFirestore(docId);
					if (ok) {
						showDeleted();
						return;
					}
				}
				// fallback local delete
				products = products.filter((item) => item.id !== id);
				await persistProducts();
				renderProducts();
				showDeleted();
			}
		});

		if (productCardList) {
			productCardList.addEventListener('click', async (event) => {
				const button = event.target.closest('button[data-action]');
				if (!button) return;
				const { action, id } = button.dataset;
				const item = products.find(p => p.id === id) || {};
				const docId = item._docId || null;
				if (action === 'edit') {
					await editProductLoad(docId, id);
					return;
				}
				if (action === 'feature') {
					await toggleFeatured(id);
					return;
				}
				if (action === 'delete') {
					const result = await showConfirmDelete();
					if (!result.isConfirmed) return;
					if (docId) {
						const ok = await deleteProductFirestore(docId);
						if (ok) {
							showDeleted();
							return;
						}
					}
					products = products.filter((item) => item.id !== id);
					await persistProducts();
					renderProducts();
					showDeleted();
				}
			});
		}

		const refreshDashboardTables = () => {
			fillRates();
			loadDashboardProducts();
			loadGalleryControl();
		};

		if (auth) {
			auth.onAuthStateChanged((user) => {
				if (!user) {
					window.location.href = 'login.html';
					return;
				}

				const t = translations[currentLang()] || translations.en;
				authStatus.textContent = t.online;
				userEmail.textContent = user.email || t.adminUser;
				refreshDashboardTables();
			});

			logoutButton.addEventListener('click', async () => {
				await auth.signOut();
				window.location.href = 'login.html';
			});
		} else {
			const t = translations[currentLang()] || translations.en;
			authStatus.textContent = t.loading;
			userEmail.textContent = t.adminUser;
			refreshDashboardTables();
		}

		refreshDashboardCopy();

		const observer = new MutationObserver(refreshDashboardCopy);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
	}
});
