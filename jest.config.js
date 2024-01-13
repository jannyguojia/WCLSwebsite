module.exports = {
    "jest": {
        "testEnvironment": "jest-environment-jsdom"
    },
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "testMatch": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    "testPathIgnorePatterns": [
        "/node_modules/"
    ],
    "moduleFileExtensions": ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"]

};
