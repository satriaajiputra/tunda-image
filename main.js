module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/xd-dialog-helper/dialog-helper.js":
/*!********************************************************!*\
  !*** ./node_modules/xd-dialog-helper/dialog-helper.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * dialog-helper.js v0.9.5
 * Copyright (c) 2018. by Pablo Klaschka
 */

let dialogs = {};

class DialogHelper {
    /**
     * A callback that gets triggered before the dialog gets shown, but after all contents got generated. You can – e.g., – manually adjust things here.
     * @callback onBeforeShowCallback
     * @param {HTMLDialogElement} dialogElement The dialog element that gets shown
     * @param {{wrapper, input?}[]} elements The dialog's elements in a key-value based manner (the key corresponds to the name of an input).,
     * @param {{close, cancel}} actions Dialog actions that can get triggered
     */

    /**
     * @callback onValidationCallback
     * @param {any[]} values The values (as they would be returned by the dialog)
     * @return {boolean} True if the dialog entries are valid
     */

    /**
     * Options regarding the dialogs properties
     * @typedef {Object} dialogOptions
     * @property {string} [okButtonText="Ok"] The text in the "ok" button (e.g., "ok", "insert" or similar)
     * @property {string} [cancelButtonText="Cancel"] The text in the "cancel" button (e.g., "cancel", "abort" or similar)
     * @property {string} [css] CSS code that gets injected into the style
     * @property {number} [width=360] The dialog width in px
     * @property {onBeforeShowCallback} [onBeforeShow] A function that gets triggered before the dialog gets shown. You can – e.g. – inject custom code here.
     * @property {onValidationCallback} [onValidate] A function that gets triggered when inputs change. Its return value determines if the inputs are value and therefore, if the ok button is clickable
     */

    /**
     * A content element of the dialog
     * @typedef {Object} contentElement
     * @property {HEADER | TEXT_INPUT | SLIDER | TEXT | SELECT | TEXT_AREA | HR | CHECKBOX} type The type of the element
     * @property {string} id The unique identifier of the element (will get used in the results object of the modal)
     * @property {Array<{value:string, label:string}>} [options] The options that can get chosen by the user (**only** relevant for type`DialogHelper.SELECT`)
     * @property {string} [label=id] The label of the element (i.e., e.g., explanatory text or the text itself for headlines and descriptions)
     * @property {string} [unit=''] The unit of the numeric value (only relevant for type `DialogHelper.SLIDER`)
     * @property {string|boolean|number} [value] The initial of a form field (will replace a value attribute in {@link contentElement.htmlAttributes} if one is set). For a {@link CHECKBOX}, a boolean value determines whether it is checked or not.
     * @property {Object} [htmlAttributes={}] Additional HTML attributes for the input field (e.g., `style`, `min` and `max` for numeric input etc.)
     */

    /**
     * Shows a dialog and awaits its results
     * @param {string} id The dialogs name / unique identifier
     * @param {string} title The title that gets displayed in the dialog
     * @param {Array<contentElement>} [contents=[]] The contents of the dialog
     * @param {dialogOptions} [options={}] Additional options for the dialog
     * @return {Promise<object>} Promise, which resolves with the form values or rejects if the dialog gets canceled
     */
    static showDialog(id, title, contents, options) {
        contents = contents || [];
        options = options || {};

        return new Promise(async (resolve, reject) => {
            let dialog;
            if (!dialogs[id]) {
                // Generate the dialog
                dialog = document.createElement('dialog');
                dialog.id = id;
                dialogs[id] = dialog;
            } else {
                dialog = dialogs[id];
                dialog.innerHTML = ''; // Empty the dialog
            }

            const stylesheet = document.createElement('style');
            stylesheet.innerHTML = `
            dialog#${id} {
                width: ${options.width || 360}px;
            }
            
            ${options.css || ''}
            `;
            dialog.appendChild(stylesheet);

            // fill the dialog with contents
            const form = document.createElement('form');

            const titleElement = document.createElement('h1');
            titleElement.innerHTML = title;
            form.appendChild(titleElement);

            const elements = DialogHelper.parseElements(id, contents);

            for (let key in elements) {
                if (elements.hasOwnProperty(key))
                    form.appendChild(elements[key].wrapper);
            }

            const footer = document.createElement('footer');

            footer.innerHTML = `
        <button id="${id}-dialogHelperBtnCancel" uxp-variant="primary">${options.cancelButtonText || 'Cancel'}</button>
        <button id="${id}-dialogHelperBtnOk" type="submit" uxp-variant="cta">${options.okButtonText || 'Ok'}</button>`;

            form.appendChild(footer);

            function onsubmit() {
                dialog.close('ok');
            }

            form.onsubmit = onsubmit;

            dialog.appendChild(form);
            document.body.appendChild(dialog);

            const cancelButton = document.querySelector("#" + id + "-dialogHelperBtnCancel");
            cancelButton.addEventListener("click", () => dialog.close('reasonCanceled'));

            /**
             * The ok button
             * @type {HTMLButtonElement}
             */
            const okButton = document.querySelector("#" + id + "-dialogHelperBtnOk");
            okButton.addEventListener("click", e => {
                onsubmit();
                e.preventDefault();
            });

            if (options.onBeforeShow)
                options.onBeforeShow(dialog, elements, {
                    cancel: () => dialog.close('reasonCanceled'),
                    close: () => {
                        if (!okButton.disabled)
                            onsubmit();
                    }
                });

            if (options.onValidate)
                this.setupValidation(elements, okButton, options.onValidate);

            const result = await dialog.showModal();
            if (result !== 'reasonCanceled') {
                let returnValue = {};
                for (let key in elements) {
                    if (elements.hasOwnProperty(key)) {
                        const element = elements[key];

                        if (element.input) {
                            if (element.input.type === 'checkbox') {
                                returnValue[key] = element.input.checked;
                            } else if (element.input.type === 'range') {
                                // Numerical values
                                returnValue[key] = Number(element.input.value);
                            } else {
                                returnValue[key] = element.input.value === undefined ? '' : element.input.value;
                            }
                        }
                    }
                }

                resolve(returnValue);
            } else {
                reject(`Dialog '${id}' got canceled by the user`);
            }
        });
    }

    /**
     * Setting up validation of the dialog
     * @param {Array<Object<{wrapper: HTMLElement, input: HTMLElement}>>} elements The elements
     * @param {HTMLButtonElement} okButton The ok button (gets disabled if form is invalid)
     * @param {onValidationCallback} validationFunction
     */
    static setupValidation(elements, okButton, validationFunction) {
        function values(elements) {
            let returnValue = {};
            for (let key in elements) {
                if (elements.hasOwnProperty(key)) {
                    const element = elements[key];

                    if (element.input) {
                        if (element.input.type === 'checkbox') {
                            returnValue[key] = element.input.checked;
                        } else {
                            returnValue[key] = element.input.value === undefined ? '' : element.input.value;
                        }
                    }
                }
            }

            return returnValue;
        }

        if (validationFunction) {
            for (let key in elements) {
                if (elements.hasOwnProperty(key)) {
                    let element = elements[key];

                    if (element.hasOwnProperty('input')) {
                        element.input.addEventListener('change', () => {
                            okButton.disabled = !validationFunction(values(elements));
                        });
                        element.input.addEventListener('input', () => {
                            okButton.disabled = !validationFunction(values(elements));
                        });
                    }
                }
            }

            // Initial validation
            okButton.disabled = !validationFunction(
                values(elements)
            );
        }
    }

    /**
     * Create an object with the content elements in a key-value form (inside an object)
     * @private
     * @param {string} dialogId
     * @param {Array<contentElement>} contents
     * @return {Array<Object<{wrapper:HTMLElement, input: HTMLElement}>>} An object containing the elements in key-value form (with the key being the id)
     */
    static parseElements(dialogId, contents) {
        let elementsObject = {};
        for (let element of contents) {
            const virtualID = element.id;
            element.id = dialogId + '-' + element.id;
            switch (element.type) {
                case this.HEADER:
                    elementsObject[virtualID] = this.parseHeader(element);
                    break;
                case this.TEXT_INPUT:
                    elementsObject[virtualID] = this.parseInput(element, 'text');
                    break;
                /*case this.NUMBER_INPUT:
                    elementsObject[element.id] = this.parseInput(element, 'number');
                    break;*/
                case this.TEXT_AREA:
                    elementsObject[virtualID] = this.parseTextarea(element);
                    break;
                case this.SELECT:
                    elementsObject[virtualID] = this.parseSelect(element);
                    break;
                case this.SLIDER:
                    elementsObject[virtualID] = this.parseSlider(element);
                    break;
                case this.CHECKBOX:
                    elementsObject[virtualID] = this.parseCheckbox(element);
                    break;
                case this.HR:
                    elementsObject[virtualID] = this.parseHR(element);
                    break;
                default:
                    elementsObject[virtualID] = this.parseText(element);

            }
        }
        return elementsObject;
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement}}
     */
    static parseHeader(contentElement) {
        const header = document.createElement('h2');
        header.innerHTML = contentElement.label;
        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                header.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }
        header.id = contentElement.id;

        return { wrapper: header };
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement}}
     */
    static parseText(contentElement) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = contentElement.label;
        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                paragraph.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }
        paragraph.id = contentElement.id;

        return { wrapper: paragraph };
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement}}
     */
    static parseHR(contentElement) {
        const rule = document.createElement('hr');
        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                rule.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }
        rule.id = contentElement.id;

        return { wrapper: rule };
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @param {'text'|'number'} type
     * @return {{wrapper: HTMLElement, input: HTMLElement}}
     */
    static parseInput(contentElement, type) {
        let inputWrapper = document.createElement("label");
        inputWrapper.id = contentElement.id + '-wrapper';
        const input = document.createElement('input');
        input.type = type;
        input.id = contentElement.id;
        input.placeholder = contentElement.label;
        const inputLabel = document.createElement('span');
        inputLabel.id = contentElement.id + '-label';
        inputLabel.innerHTML = contentElement.label + '<br>';
        inputWrapper.appendChild(inputLabel);
        inputWrapper.appendChild(input);

        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                input.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }

        if (contentElement.value !== undefined)
            input.value = contentElement.value;

        return { wrapper: inputWrapper, input: input };
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement, input: HTMLElement} | null}
     */
    static parseSlider(contentElement) {
        if (
            contentElement.htmlAttributes === undefined ||
            (contentElement.htmlAttributes.value === undefined && contentElement.value === undefined) ||
            contentElement.htmlAttributes.min === undefined ||
            contentElement.htmlAttributes.max === undefined
        ) {
            console.error('A slider must have a min, max and value parameter specified in its `htmlAttributes` (value can also be specified outside the `htmlAttributes`).');
            return null;
        }

        const sliderWrapper = document.createElement("label");
        sliderWrapper.id = contentElement.id + '-wrapper';

        const label = document.createElement("span");
        label.textContent = contentElement.label;
        label.id = contentElement.id + '-label';

        const displayValue = document.createElement("span");
        displayValue.id = contentElement.id + '-value-label';
        displayValue.textContent = (contentElement.htmlAttributes.value || contentElement.value) + (contentElement.unit || '');

        const labelAndDisplay = document.createElement("div");
        labelAndDisplay.className = "row";
        labelAndDisplay.style.justifyContent = "space-between";
        labelAndDisplay.appendChild(label);
        labelAndDisplay.appendChild(displayValue);

        const slider = document.createElement("input");
        slider.id = contentElement.id;
        slider.setAttribute("type", "range");

        slider.addEventListener('change',
            () => displayValue.textContent = Math.round(slider.value) + (contentElement.unit || ''));

        sliderWrapper.appendChild(labelAndDisplay);
        sliderWrapper.appendChild(slider);

        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                if (contentElement.htmlAttributes.hasOwnProperty(name))
                    slider.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }

        if (contentElement.value !== undefined)
            slider.value = contentElement.value;

        return { wrapper: sliderWrapper, input: slider }
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement, input: HTMLElement}}
     */
    static parseTextarea(contentElement) {
        let textareaWrapper = document.createElement("label");
        textareaWrapper.id = contentElement.id + '-wrapper';
        const textarea = document.createElement('textarea');
        textarea.id = contentElement.id;
        textarea.placeholder = contentElement.label;
        const textareaLabel = document.createElement('span');
        textareaLabel.id = contentElement.id + '-label';
        textareaLabel.innerHTML = contentElement.label + '<br>';
        textareaWrapper.appendChild(textareaLabel);
        textareaWrapper.appendChild(textarea);


        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                textarea.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }

        if (contentElement.value !== undefined)
            textarea.value = contentElement.value;

        return { wrapper: textareaWrapper, input: textarea };
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement, input: HTMLElement}}
     */
    static parseCheckbox(contentElement) {
        const checkboxWrapper = document.createElement("label");
        checkboxWrapper.id = contentElement.id + '-wrapper';
        Object.assign(checkboxWrapper.style, { flexDirection: "row", alignItems: "center" });

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = contentElement.id;
        checkbox.placeholder = contentElement.label;

        checkboxWrapper.appendChild(checkbox);
        const checkboxLabel = document.createElement('span');
        checkboxLabel.id = contentElement.id + '-label';
        checkboxLabel.innerHTML = contentElement.label;
        checkboxWrapper.appendChild(checkboxLabel);


        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                checkbox.setAttribute(name, contentElement.htmlAttributes[name]);
            }
        }

        if (contentElement.value !== undefined) {
            checkbox.value = contentElement.value;
            checkbox.checked = contentElement.value === true;
        }

        return { wrapper: checkboxWrapper, input: checkbox };
    }

    /**
     * @private
     * @param {contentElement} contentElement
     * @return {{wrapper: HTMLElement, input: HTMLElement}}
     */
    static parseSelect(contentElement) {
        const selectWrapper = document.createElement("label");
        selectWrapper.id = contentElement.id + "-wrapper";
        const selectLabel = document.createElement('span');
        selectLabel.id = contentElement.id + "-label";
        selectLabel.innerHTML = contentElement.label;
        selectWrapper.appendChild(selectLabel);
        const select = document.createElement('select');
        select.id = contentElement.id;

        for (let entry of contentElement.options) {
            let optEntry = document.createElement("option");
            optEntry.value = entry.value;
            optEntry.innerHTML = entry.label;
            select.appendChild(optEntry);
        }
        selectWrapper.appendChild(select);

        if (contentElement.htmlAttributes) {
            for (let name in contentElement.htmlAttributes) {
                select.setAttribute(name, contentElement.htmlAttributes[name]);
            }
            // To select value in select:
            if (contentElement.htmlAttributes['value'])
                select.value = contentElement.htmlAttributes.value;
        }


        if (contentElement.value !== undefined)
            select.value = contentElement.value;

        return { wrapper: selectWrapper, input: select };
    }


    /**
     * A headline
     */
    static get HEADER() {
        return 0;
    }

    /**
     * A simple text (primarily used for descriptions)
     * @deprecated Deprecated since version 0.9.1, will be removed in v1.0.0. Use {@link TEXT} instead
     */
    static get DESCRIPTION() {
        return 1;
    }

    /**
     * A simple text (primarily used for descriptions)
     */
    static get TEXT() {
        return 1;
    }

    /**
     * A simple text input
     */
    static get TEXT_INPUT() {
        return 2;
    }

    /**
     * A text area
     */
    static get TEXT_AREA() {
        return 3;
    }

    /**
     * A dropdown select field
     */
    static get SELECT() {
        return 4;
    }

    /**
     * A slider
     */
    static get SLIDER() {
        return 5;
    }

    /**
     * An input for numeric values
     */

    /*static get NUMBER_INPUT() {
        return 6;
    }*/

    /**
     * A horizontal ruler (`<hr>`)
     */
    static get HR() {
        return 7;
    }

    /**
     * A checkbox
     */
    static get CHECKBOX() {
        return 8;
    }
}

module.exports = DialogHelper;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { ImageFill } = __webpack_require__(/*! scenegraph */ "scenegraph");
const DialogHelper = __webpack_require__(/*! xd-dialog-helper */ "./node_modules/xd-dialog-helper/dialog-helper.js");

function applyImage(selection, url) {
  if (selection.items.length) {
    return downloadImage(selection, url);
  } else {
    console.log('Please select a shape to apply the downloaded image.');
  }
}

async function downloadImage(selection, url) {
  try {
    const photoUrl = url;
    const photoObj = await xhrBinary(photoUrl);
    const photoObjBase64 = await base64ArrayBuffer(photoObj);
    applyImagefill(selection, photoObjBase64);
  } catch (err) {
    console.log('error');
    console.log(err.message);
  }
}

function xhrBinary(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.onload = () => {
      if (req.status === 200) {
        try {
          const arr = new Uint8Array(req.response);
          resolve(arr);
        } catch (err) {
          reject('Couldnt parse response. ${err.message}, ${req.response}');
        }
      } else {
        reject('Request had an error: ${req.status}');
      }
    };
    req.onerror = reject;
    req.onabort = reject;
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';
    req.send();
  });
}

function applyImagefill(selection, base64) {
  const imageFill = new ImageFill(`data:image/jpeg;base64,${base64}`);
  selection.items[0].fill = imageFill;
}

function base64ArrayBuffer(arrayBuffer) {
  let base64 = '';
  const encodings =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;

  let a;
  let b;
  let c;
  let d;
  let chunk;

  // Main loop deals with bytes in chunks of 3
  for (let i = 0; i < mainLength; i += 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63; // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += `${encodings[a]}${encodings[b]}==`;
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
  }

  return base64;
}

async function showModal(selection) {
  try {
    const result = await DialogHelper.showDialog(
      'tunda-image',
      'Tunda Image',
      [
        {
          type: DialogHelper.HR,
          id: 'hr'
        },
        {
          type: DialogHelper.TEXT,
          id: 'welcome',
          label: 'Fill your rect with an image from your image url here'
        },
        {
          type: DialogHelper.TEXT_INPUT,
          id: 'url',
          label: 'http://...',
          value: ''
        }
      ],
      {
        okButtonText: 'Tunda Image'
      }
    );

    // now, result is the object containing all the values
    if (selection.items.length) {
      return downloadImage(selection, result.url);
    } else {
      console.log('Please select a shape to apply the downloaded image.');
    }
  } catch (e) {
    // The dialog got canceled by the user.
  }
}

module.exports.commands = {
  showModal: showModal
};


/***/ }),

/***/ "scenegraph":
/*!*****************************!*\
  !*** external "scenegraph" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scenegraph");

/***/ })

/******/ });