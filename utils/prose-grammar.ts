import Prism from 'prismjs';

Prism.languages.prose = {
    'comment': [
        { pattern: /\/\*[\s\S]*?\*\//, greedy: true },
        { pattern: /\/\/.*/, greedy: true },
    ],
    'string': {
        pattern: /"(?:\\.|[^"\\])*"/,
        greedy: true,
    },
    // @ prefix (Keywords7, cyan)
    'decorator': /@\w*/,
    // Event triggers (Keywords4, yellow)
    'event': /\b(?:on_tick|on_start|on_end|on_touch|on_see|on_key_press|on_key_release|on_note_press|on_note_release|told|on_play_sfx)\b/,
    // Control flow (Keywords1, hot pink bold)
    'keyword': /\b(?:events|when|then|else|if|repeat)\b/,
    // Logical operators (Keywords2, light purple bold)
    'logical': /\b(?:and|or|not|xor)\b/,
    // Structure keywords (Keywords3, green)
    'builtin-keyword': /\b(?:return|sentence)\b/,
    // Built-in functions (Keywords8, green bold)
    'function': /\b(?:print|tell|goto)\b/,
    // Literals and type names (Keywords6, light pink)
    'constant': /\b(?:true|false|nil|NUMBER|STRING|BOOLEAN|NIL|ENTITY|TYPE|FUNCTION)\b/,
    // Built-in identifiers (Keywords5, light gray)
    'builtin': /\b(?:self|wbset|wbget|wberase|dt)\b/,
    'number': /\b\d+(?:\.\d+)?\b/,
    'operator': /[;:.>=<!+\-*/,{}()|]+/,
};
