"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/data/projects.ts":
/*!******************************!*\
  !*** ./src/data/projects.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst projects = [\n    {\n        title: \"Context/Content\",\n        date: \"2019-12-00\",\n        link: \"https://contextcontent.vercel.app/\",\n        deployStatus: \"archived\",\n        githubChip: \"https://github.com/gnjmonroe/contextcontent\",\n        description: null,\n        keywords: [\n            \"HTML/CSS/JS(vanilla)\",\n            \"Graphic Design\"\n        ]\n    },\n    {\n        title: \"someparts.parts\",\n        date: \"2019-11-00\",\n        link: \"https://someparts-parts.vercel.app/\",\n        deployStatus: \"archived\",\n        githubChip: \"https://github.com/gnjmonroe/someparts.parts\",\n        description: null,\n        keywords: [\n            \"HTML/CSS/JS(vanilla)\",\n            \"Graphic Design\",\n            \"jQuery\"\n        ]\n    },\n    {\n        title: \"PRAUD Website Renewal\",\n        date: \"2022-06-20\",\n        link: \"https://praud.info/\",\n        deployStatus: \"live\",\n        githubChip: null,\n        description: null,\n        keywords: [\n            \"React\",\n            \"GraphQL\",\n            \"HTML Canvas\",\n            \"Graphic Design\",\n            \"Gatsby\",\n            \"Sanity\",\n            \"Netlify\"\n        ]\n    },\n    {\n        title: \"Domansa Website Renewal\",\n        date: \"2022-10-30\",\n        link: \"https://domansaseoul.org/\",\n        deployStatus: \"live\",\n        githubChip: null,\n        description: null,\n        keywords: [\n            \"Graphic Design\",\n            \"Typescript\",\n            \"React\",\n            \"Gatsby\",\n            \"Sanity\",\n            \"Netlify\",\n            \"SCSS\"\n        ]\n    },\n    {\n        title: \"Platform C Website Renewal\",\n        date: \"2023-01-20\",\n        link: \"https://platformc.kr/\",\n        deployStatus: \"live\",\n        githubChip: null,\n        description: null,\n        keywords: [\n            \"Typescript\",\n            \"React\",\n            \"GraphQL\",\n            \"Gatsby\",\n            \"Sanity\",\n            \"Netlify\",\n            \"SCSS\"\n        ]\n    },\n    {\n        title: \"[ongoing project]\",\n        date: \"ongoing\",\n        link: null,\n        deployStatus: \"ongoing\",\n        githubChip: null,\n        description: null,\n        keywords: [\n            \"Wordpress\",\n            \"eCommerce\",\n            \"BigCommerce\",\n            \"PHP\",\n            \"Javascript\",\n            \"SCSS\"\n        ]\n    },\n    {\n        title: \"와!\",\n        date: \"2022-09-20\",\n        link: \"https://github.com/gnjmonroe/wawawa\",\n        deployStatus: \"archived\",\n        githubChip: \"https://github.com/gnjmonroe/wawawa\",\n        description: \"An exhibition site presenting livestreams of parks around the world.\",\n        keywords: [\n            \"React\",\n            \"Vite\",\n            \"API\",\n            \"YouTube API\",\n            \"SVG\",\n            \"SCSS\",\n            \"Typescript\"\n        ]\n    },\n    {\n        title: \"PRAUD Amplifer\",\n        date: \"2022-11-31\",\n        link: \"https://github.com/gnjmonroe/praud-amplifier\",\n        deployStatus: \"archived\",\n        githubChip: \"https://github.com/gnjmonroe/praud-amplifier\",\n        description: \"A CRUD app to illustrate customization potential of architectural proposal.\",\n        keywords: [\n            \"React\",\n            \"TypeScript\",\n            \"Graphic Design\",\n            \"PWA\",\n            \"SCSS\",\n            \"Netlify\"\n        ]\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9wcm9qZWN0cy50cy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FRQTtJQUNKO1FBQ0VDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsWUFBWTtRQUNaQyxhQUFhLElBQUk7UUFDakJDLFVBQVU7WUFBQztZQUF3QjtTQUFpQjtJQUN0RDtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsWUFBWTtRQUNaQyxhQUFhLElBQUk7UUFDakJDLFVBQVU7WUFBQztZQUF3QjtZQUFrQjtTQUFTO0lBQ2hFO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsY0FBYztRQUNkQyxZQUFZLElBQUk7UUFDaEJDLGFBQWEsSUFBSTtRQUNqQkMsVUFBVTtZQUNSO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsWUFBWSxJQUFJO1FBQ2hCQyxhQUFhLElBQUk7UUFDakJDLFVBQVU7WUFDUjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxjQUFjO1FBQ2RDLFlBQVksSUFBSTtRQUNoQkMsYUFBYSxJQUFJO1FBQ2pCQyxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU0sSUFBSTtRQUNWQyxjQUFjO1FBQ2RDLFlBQVksSUFBSTtRQUNoQkMsYUFBYSxJQUFJO1FBQ2pCQyxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsWUFBWTtRQUNaQyxhQUNFO1FBQ0ZDLFVBQVU7WUFDUjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxjQUFjO1FBQ2RDLFlBQVk7UUFDWkMsYUFDRTtRQUNGQyxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtDQUNEO0FBQ0QsK0RBQWVQLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvcHJvamVjdHMudHM/MDAzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0czoge1xuICB0aXRsZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7IC8vIFlZWVktTU0tRERcbiAgbGluazogc3RyaW5nIHwgbnVsbDtcbiAgZGVwbG95U3RhdHVzOiAnbGl2ZScgfCAnYXJjaGl2ZWQnIHwgJ29uZ29pbmcnO1xuICBnaXRodWJDaGlwOiBzdHJpbmcgfCBudWxsO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbDtcbiAga2V5d29yZHM6IHN0cmluZ1tdO1xufVtdID0gW1xuICB7XG4gICAgdGl0bGU6ICdDb250ZXh0L0NvbnRlbnQnLFxuICAgIGRhdGU6ICcyMDE5LTEyLTAwJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9jb250ZXh0Y29udGVudC52ZXJjZWwuYXBwLycsXG4gICAgZGVwbG95U3RhdHVzOiAnYXJjaGl2ZWQnLFxuICAgIGdpdGh1YkNoaXA6ICdodHRwczovL2dpdGh1Yi5jb20vZ25qbW9ucm9lL2NvbnRleHRjb250ZW50JyxcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICBrZXl3b3JkczogWydIVE1ML0NTUy9KUyh2YW5pbGxhKScsICdHcmFwaGljIERlc2lnbiddLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdzb21lcGFydHMucGFydHMnLFxuICAgIGRhdGU6ICcyMDE5LTExLTAwJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9zb21lcGFydHMtcGFydHMudmVyY2VsLmFwcC8nLFxuICAgIGRlcGxveVN0YXR1czogJ2FyY2hpdmVkJyxcbiAgICBnaXRodWJDaGlwOiAnaHR0cHM6Ly9naXRodWIuY29tL2duam1vbnJvZS9zb21lcGFydHMucGFydHMnLFxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgIGtleXdvcmRzOiBbJ0hUTUwvQ1NTL0pTKHZhbmlsbGEpJywgJ0dyYXBoaWMgRGVzaWduJywgJ2pRdWVyeSddLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQUkFVRCBXZWJzaXRlIFJlbmV3YWwnLFxuICAgIGRhdGU6ICcyMDIyLTA2LTIwJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9wcmF1ZC5pbmZvLycsXG4gICAgZGVwbG95U3RhdHVzOiAnbGl2ZScsXG4gICAgZ2l0aHViQ2hpcDogbnVsbCwgLy8gY2hlY2sgZm9yIHNlbnNpdGl2ZSBpbmZvXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdSZWFjdCcsXG4gICAgICAnR3JhcGhRTCcsXG4gICAgICAnSFRNTCBDYW52YXMnLFxuICAgICAgJ0dyYXBoaWMgRGVzaWduJyxcbiAgICAgICdHYXRzYnknLFxuICAgICAgJ1Nhbml0eScsXG4gICAgICAnTmV0bGlmeScsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRG9tYW5zYSBXZWJzaXRlIFJlbmV3YWwnLFxuICAgIGRhdGU6ICcyMDIyLTEwLTMwJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9kb21hbnNhc2VvdWwub3JnLycsXG4gICAgZGVwbG95U3RhdHVzOiAnbGl2ZScsXG4gICAgZ2l0aHViQ2hpcDogbnVsbCwgLy8gY2hlY2sgZm9yIHNlbnNpdGl2ZSBpbmZvXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdHcmFwaGljIERlc2lnbicsXG4gICAgICAnVHlwZXNjcmlwdCcsXG4gICAgICAnUmVhY3QnLFxuICAgICAgJ0dhdHNieScsXG4gICAgICAnU2FuaXR5JyxcbiAgICAgICdOZXRsaWZ5JyxcbiAgICAgICdTQ1NTJyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQbGF0Zm9ybSBDIFdlYnNpdGUgUmVuZXdhbCcsXG4gICAgZGF0ZTogJzIwMjMtMDEtMjAnLFxuICAgIGxpbms6ICdodHRwczovL3BsYXRmb3JtYy5rci8nLFxuICAgIGRlcGxveVN0YXR1czogJ2xpdmUnLFxuICAgIGdpdGh1YkNoaXA6IG51bGwsXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdUeXBlc2NyaXB0JyxcbiAgICAgICdSZWFjdCcsXG4gICAgICAnR3JhcGhRTCcsXG4gICAgICAnR2F0c2J5JyxcbiAgICAgICdTYW5pdHknLFxuICAgICAgJ05ldGxpZnknLFxuICAgICAgJ1NDU1MnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1tvbmdvaW5nIHByb2plY3RdJyxcbiAgICBkYXRlOiAnb25nb2luZycsXG4gICAgbGluazogbnVsbCwgLy8gbGluayB3aGVuIHB1Ymxpc2hlZFxuICAgIGRlcGxveVN0YXR1czogJ29uZ29pbmcnLFxuICAgIGdpdGh1YkNoaXA6IG51bGwsXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdXb3JkcHJlc3MnLFxuICAgICAgJ2VDb21tZXJjZScsXG4gICAgICAnQmlnQ29tbWVyY2UnLFxuICAgICAgJ1BIUCcsXG4gICAgICAnSmF2YXNjcmlwdCcsXG4gICAgICAnU0NTUycsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn7JmAIScsXG4gICAgZGF0ZTogJzIwMjItMDktMjAnLFxuICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vZ25qbW9ucm9lL3dhd2F3YScsXG4gICAgZGVwbG95U3RhdHVzOiAnYXJjaGl2ZWQnLFxuICAgIGdpdGh1YkNoaXA6ICdodHRwczovL2dpdGh1Yi5jb20vZ25qbW9ucm9lL3dhd2F3YScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQW4gZXhoaWJpdGlvbiBzaXRlIHByZXNlbnRpbmcgbGl2ZXN0cmVhbXMgb2YgcGFya3MgYXJvdW5kIHRoZSB3b3JsZC4nLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAnUmVhY3QnLFxuICAgICAgJ1ZpdGUnLFxuICAgICAgJ0FQSScsXG4gICAgICAnWW91VHViZSBBUEknLFxuICAgICAgJ1NWRycsXG4gICAgICAnU0NTUycsXG4gICAgICAnVHlwZXNjcmlwdCcsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUFJBVUQgQW1wbGlmZXInLFxuICAgIGRhdGU6ICcyMDIyLTExLTMxJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2duam1vbnJvZS9wcmF1ZC1hbXBsaWZpZXInLFxuICAgIGRlcGxveVN0YXR1czogJ2FyY2hpdmVkJyxcbiAgICBnaXRodWJDaGlwOiAnaHR0cHM6Ly9naXRodWIuY29tL2duam1vbnJvZS9wcmF1ZC1hbXBsaWZpZXInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0EgQ1JVRCBhcHAgdG8gaWxsdXN0cmF0ZSBjdXN0b21pemF0aW9uIHBvdGVudGlhbCBvZiBhcmNoaXRlY3R1cmFsIHByb3Bvc2FsLicsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdSZWFjdCcsXG4gICAgICAnVHlwZVNjcmlwdCcsXG4gICAgICAnR3JhcGhpYyBEZXNpZ24nLFxuICAgICAgJ1BXQScsXG4gICAgICAnU0NTUycsXG4gICAgICAnTmV0bGlmeScsXG4gICAgXSxcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGF0ZSIsImxpbmsiLCJkZXBsb3lTdGF0dXMiLCJnaXRodWJDaGlwIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/projects.ts\n"));

/***/ })

});