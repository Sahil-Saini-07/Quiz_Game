/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/src/QuizObject.ts":
/*!***********************************!*\
  !*** ./scripts/src/QuizObject.ts ***!
  \***********************************/
/*! exports provided: QuizObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuizObject\", function() { return QuizObject; });\nclass QuizObject {\r\n    constructor(question, options, answer) {\r\n        this.question = question;\r\n        this.options = options;\r\n        this.answer = answer;\r\n    }\r\n    getQuestion() {\r\n        return this.question;\r\n    }\r\n    getOptions() {\r\n        return this.options;\r\n    }\r\n    getAnswer() {\r\n        return this.answer;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/src/QuizObject.ts?");

/***/ }),

/***/ "./scripts/src/jsonObj.ts":
/*!********************************!*\
  !*** ./scripts/src/jsonObj.ts ***!
  \********************************/
/*! exports provided: jsonObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsonObj\", function() { return jsonObj; });\nlet jsonObj = {\r\n    \"easy\": [{\r\n            \"Question\": \"Who was the first President of India?\",\r\n            \"Options\": \"Dr. Rajendra Prasad,ABJ Abdul Kalam,Indira Gandhi,Lala Lajpat Rai\",\r\n            \"Answer\": \"Dr. Rajendra Prasad\"\r\n        },\r\n        {\r\n            \"Question\": \"Which of the following is the capital of Arunachal Pradesh?\",\r\n            \"Options\": \"Lucknow,Bhopal,Itanagar,Dispur\",\r\n            \"Answer\": \"Itanagar\"\r\n        },\r\n        {\r\n            \"Question\": \"Which Indian state has the least literacy rate?\",\r\n            \"Options\": \"Gujarat,Chhattisgarh,Bihar,Haryana\",\r\n            \"Answer\": \"Bihar\"\r\n        },\r\n        {\r\n            \"Question\": \" SI unit of pressure is \",\r\n            \"Options\": \"Kelvin,Pascal,Joule,Newton\",\r\n            \"Answer\": \"Pascal\"\r\n        },\r\n        {\r\n            \"Question\": \"How many consonants are there in the English alphabet?\",\r\n            \"Options\": \"21,26,5,22\",\r\n            \"Answer\": \"21\"\r\n        },\r\n        {\r\n            \"Question\": \"During which year did World War I begin?\",\r\n            \"Options\": \"1914,1915,1912,1919\",\r\n            \"Answer\": \"1914\"\r\n        },\r\n        {\r\n            \"Question\": \"Which planet is known as the Red Planet?\",\r\n            \"Options\": \"Neptune,Venus,Mars,Jupiter\",\r\n            \"Answer\": \"Mars\"\r\n        },\r\n        {\r\n            \"Question\": \"Who painted the Mona Lisa?\",\r\n            \"Options\": \"Pablo Picasso,Leonardo da Vinci,Edvard Munch,Grant Wood\",\r\n            \"Answer\": \"Leonardo da Vinci\"\r\n        },\r\n        {\r\n            \"Question\": \"Hitler party which came into power in 1933 is known as\",\r\n            \"Options\": \"Labour Party,Nazi Party,Ku-Klux-Klan,Democratic Party\",\r\n            \"Answer\": \"Nazi Party\"\r\n        },\r\n        {\r\n            \"Question\": \"India's first satellite is named after\",\r\n            \"Options\": \"Ramanujan,Bhaskara II,Bhaskara I,Aryabhatta\",\r\n            \"Answer\": \"Aryabhatta\"\r\n        },\r\n    ],\r\n    \"intermediate\": [{\r\n            \"Question\": \"Who made Linux kernel?\",\r\n            \"Options\": \"Guido van Rossum,Dennis Ritchie,Tim Berners-Lee,Linus Torvalds\",\r\n            \"Answer\": \"Linus Torvalds\"\r\n        },\r\n        {\r\n            \"Question\": \"Which of the following awards is not associated with Sports?\",\r\n            \"Options\": \"Dronacharya Award,Jnanpith Award,Arjuna Award,Ekalavya Award\",\r\n            \"Answer\": \"Jnanpith Award\"\r\n        },\r\n        {\r\n            \"Question\": \"How many players are there in an ice hockey team?\",\r\n            \"Options\": \"6,5,9,11\",\r\n            \"Answer\": \"6\"\r\n        }, {\r\n            \"Question\": \"The world's largest station by number of platforms is\",\r\n            \"Options\": \"Chicago Union Station(Chicago),Antwerpen-Centraal(Belgium),Grand Central Terminal(New York City),Gare du Nord(Paris)\",\r\n            \"Answer\": \"Grand Central Terminal(New York City)\"\r\n        },\r\n        {\r\n            \"Question\": \"Who was the first Indian to get a Nobel Prize?\",\r\n            \"Options\": \"C. V. Raman,Rabindranath Tagore,Mother Teresa,Amartya Sen\",\r\n            \"Answer\": \"Rabindranath Tagore\"\r\n        },\r\n        {\r\n            \"Question\": \"Para athlete Deepa Malik (1st women to win medal in Paralympic games) who announced retirement is associated with which sports?\",\r\n            \"Options\": \"Triple Jump,Javelin Throw,Shot Put,Long jump\",\r\n            \"Answer\": \"Shot Put\"\r\n        },\r\n        {\r\n            \"Question\": \"How many times has Brazil won the World Cup Football Championship?\",\r\n            \"Options\": \"Four times,Twice,Five times,Once\",\r\n            \"Answer\": \"Five times\"\r\n        }\r\n    ],\r\n    \"difficult\": [{\r\n            \"Question\": \"The Aapki Beti scheme is associated to which of the following state governments?\",\r\n            \"Options\": \"Uttar Pradesh,Rajasthan,Chhattisgarh,Madhya Pradesh\",\r\n            \"Answer\": \"Rajasthan\"\r\n        },\r\n        {\r\n            \"Question\": \"Which actress has won the most Oscars?\",\r\n            \"Options\": \"Judy Garland,Greer Garson,Grace Kelly,Katharine Hepburn\",\r\n            \"Answer\": \"Katharine Hepburn\"\r\n        },\r\n        {\r\n            \"Question\": \"Who is the founder of Wikipedia?\",\r\n            \"Options\": \"Eric Yuan,Ben Silbermann,Adam D'Angelo,Jimmy Wales\",\r\n            \"Answer\": \"Jimmy Wales\"\r\n        },\r\n        {\r\n            \"Question\": \"The headquarters of Reserve Bank of India is\",\r\n            \"Options\": \"Mumbai,Kolkata,Chennai,New Delhi\",\r\n            \"Answer\": \"Mumbai\"\r\n        },\r\n        {\r\n            \"Question\": \"First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in\",\r\n            \"Options\": \"1967,1968,1958,1990\",\r\n            \"Answer\": \"1967\"\r\n        }\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack:///./scripts/src/jsonObj.ts?");

/***/ }),

/***/ "./scripts/src/main.ts":
/*!*****************************!*\
  !*** ./scripts/src/main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _QuizObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizObject */ \"./scripts/src/QuizObject.ts\");\n/* harmony import */ var _jsonObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonObj */ \"./scripts/src/jsonObj.ts\");\n\r\n\r\nvar DifficultyLevel;\r\n(function (DifficultyLevel) {\r\n    DifficultyLevel[DifficultyLevel[\"EASY\"] = 0] = \"EASY\";\r\n    DifficultyLevel[DifficultyLevel[\"MEDIUM\"] = 1] = \"MEDIUM\";\r\n    DifficultyLevel[DifficultyLevel[\"DIFFICULT\"] = 2] = \"DIFFICULT\";\r\n})(DifficultyLevel || (DifficultyLevel = {}));\r\nlet easyQuestions = []; //list holding easy level questions\r\nlet intermediateQuestions = []; //list holding medium level questions \r\nlet difficultQuestions = []; //list holding difficult level questions\r\nlet questionDOMElement; //reference question div\r\nlet questionOptionsList; //reference to option divs\r\nlet currentQuestion; //question currently visible to user\r\nlet counter = 0; //counter to track progress\r\nlet globalTimer; //global timer\r\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\r\n    //getting QuizObject objects \r\n    getEntries(_jsonObj__WEBPACK_IMPORTED_MODULE_1__[\"jsonObj\"].easy, easyQuestions);\r\n    getEntries(_jsonObj__WEBPACK_IMPORTED_MODULE_1__[\"jsonObj\"].intermediate, intermediateQuestions);\r\n    getEntries(_jsonObj__WEBPACK_IMPORTED_MODULE_1__[\"jsonObj\"].difficult, difficultQuestions);\r\n    questionDOMElement = document.getElementById(\"question\");\r\n    questionOptionsList = document.getElementsByClassName(\"option\");\r\n    document.getElementById(\"playAgainButton\").addEventListener(\"click\", function () {\r\n        location.reload();\r\n    });\r\n    for (var iterator = 0; iterator < questionOptionsList.length; iterator++) {\r\n        questionOptionsList[iterator].addEventListener(\"click\", function (event) {\r\n            evaluateOption(event.target);\r\n        });\r\n    }\r\n    selectQuestion(DifficultyLevel.EASY);\r\n});\r\n/**\r\n * DESCRIPTION : This function populates QuizObject in respective lists.\r\n * @param obj\r\n * @param array\r\n */\r\nfunction getEntries(obj, array) {\r\n    for (var iterator = 0; iterator < obj.length; iterator++) {\r\n        var entry = obj[iterator];\r\n        var question = entry.Question;\r\n        var answer = entry.Answer;\r\n        var options = entry.Options;\r\n        var questionObject = new _QuizObject__WEBPACK_IMPORTED_MODULE_0__[\"QuizObject\"](question, options, answer);\r\n        array.push(questionObject);\r\n    }\r\n}\r\n/**\r\n * DESCRIPTION : This function evaluates selected option. If option is correct move to next question\r\n * else restart the game.\r\n * @param eventTarget\r\n */\r\nfunction evaluateOption(eventTarget) {\r\n    clearTimeout(globalTimer);\r\n    var selectedOptionText = eventTarget.dataset.value;\r\n    console.log(counter);\r\n    var progressDot = document.getElementById(\"progress-\" + counter);\r\n    if (selectedOptionText == currentQuestion.getAnswer()) {\r\n        eventTarget.classList.add(\"correct-answer\");\r\n        progressDot.classList.add(\"correct-answer\");\r\n        globalTimer = setTimeout(function () {\r\n            if (counter < 4) {\r\n                selectQuestion(DifficultyLevel.EASY);\r\n            }\r\n            else if ((counter >= 4) && (counter < 7)) {\r\n                selectQuestion(DifficultyLevel.MEDIUM);\r\n            }\r\n            else if ((counter >= 7) && (counter < 10)) {\r\n                selectQuestion(DifficultyLevel.DIFFICULT);\r\n            }\r\n            else {\r\n                displayResult(true);\r\n            }\r\n        }, 1000);\r\n    }\r\n    else {\r\n        eventTarget.classList.add(\"incorrect-answer\");\r\n        progressDot.classList.add(\"incorrect-answer\");\r\n        globalTimer = setTimeout(function () {\r\n            displayResult(false);\r\n        }, 1000);\r\n    }\r\n}\r\n/**\r\n * DESCRIPTION : Function to select question based on difficulty level.\r\n * @param difficulty\r\n */\r\nfunction selectQuestion(difficulty) {\r\n    let quizObject = new _QuizObject__WEBPACK_IMPORTED_MODULE_0__[\"QuizObject\"](\"\", \"\", \"\");\r\n    let randomIndex = 0;\r\n    switch (difficulty) {\r\n        case DifficultyLevel.EASY:\r\n            randomIndex = getRandomIndex(easyQuestions);\r\n            quizObject = easyQuestions[randomIndex];\r\n            easyQuestions.splice(randomIndex, 1);\r\n            break;\r\n        case DifficultyLevel.MEDIUM:\r\n            randomIndex = getRandomIndex(intermediateQuestions);\r\n            quizObject = intermediateQuestions[randomIndex];\r\n            intermediateQuestions.splice(randomIndex, 1);\r\n            break;\r\n        case DifficultyLevel.DIFFICULT:\r\n            randomIndex = getRandomIndex(difficultQuestions);\r\n            quizObject = difficultQuestions[randomIndex];\r\n            difficultQuestions.splice(randomIndex, 1);\r\n            break;\r\n        default:\r\n            console.log(\"default\");\r\n    }\r\n    currentQuestion = quizObject;\r\n    counter += 1;\r\n    printQuestion(quizObject);\r\n}\r\n/**\r\n * DESCRIPTION : Function to print question or update html.\r\n * @param quizObject\r\n */\r\nfunction printQuestion(quizObject) {\r\n    questionDOMElement.innerText = quizObject.getQuestion();\r\n    let optionArray = quizObject.getOptions().split(\",\");\r\n    for (var iterator = 0; iterator < questionOptionsList.length; iterator++) {\r\n        questionOptionsList[iterator].innerText = (iterator + 1) + \". \" + optionArray[iterator];\r\n        questionOptionsList[iterator].dataset.value = optionArray[iterator];\r\n        questionOptionsList[iterator].classList.remove(\"correct-answer\");\r\n    }\r\n}\r\nfunction getRandomIndex(array) {\r\n    return Math.floor(Math.random() * array.length);\r\n}\r\nfunction displayResult(wonGame) {\r\n    let quizContainer = document.getElementById(\"quizContainerDiv\");\r\n    let resultDiv = document.getElementById(\"resultDiv\");\r\n    let resultText = document.getElementById(\"resultText\");\r\n    quizContainer.classList.add(\"hide-element\");\r\n    resultDiv.classList.remove(\"hide-element\");\r\n    if (wonGame) {\r\n        resultText.innerText = \"You Won\";\r\n    }\r\n    else {\r\n        resultText.innerText = \"You Lost\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/src/main.ts?");

/***/ })

/******/ });