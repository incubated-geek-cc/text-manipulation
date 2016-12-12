function privacy_policy() {
    var text =
            '~ TextMechanic.co Privacy Policy ~\n\n' +
            'Log Files: The TextMechanic.co webserver records log files as required by United States law. The information inside the log files includes: ip address, date/time stamp, referring page and user agent.\n\n' +
            'Cookies: TextMechanic.co and it\'s partners use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.\n\n' +
            'Tools: All tool are built-with and functions-in Client Side JavaScripting, so only your computer will see or process your data input/output. Input/processing/output data is never transmitted over the internet and always resides within your computer. However, cloud operating systems could transmit your data into the cloud\'s system for processing but this has nothing to do with the TextMechanic.co webserver.\n\n' +
            'Sensitive Data Disclaimer: Don\'t trust any website with sensitive data, not even TextMechanic.co. Keep your sensitive data secure by keeping it to yourself.\n\n';
    alert(text);
}

window.onload = autosize_input_output;
window.onresize = autosize_input_output;

function set_menu_height() {
    var client_height = document.body.parentNode.clientHeight;
    var function_menu_height = client_height - 305;
    if (function_menu_height >= 200) {
        document.getElementById('function_menu').style.height = function_menu_height + 'px';
    } else {
        document.getElementById('function_menu').style.height = '200px';
    }
}

function autosize_input_output() {
    var client_width = document.body.parentNode.clientWidth;
    document.getElementById('input_output').style.width = (client_width - 230) + 'px';
    document.getElementById('function_box').style.width = (client_width - 150) + 'px';
    setTimeout('set_menu_height()', 100)
}

var wrapis_cache = 'off';
var line_count_cache = 0;

function scroll_areas() {
    if (wrapis_cache == 'off') {
        document.getElementById('line_counter').scrollTop = document.getElementById('input_output').scrollTop;
    }
}

function line_counter() {
    if (wrapis_cache == 'on') {
        document.getElementById('line_counter').value = '';
        line_count_cache = 0;
    }
    if (wrapis_cache == 'off') {
        var line_count = document.getElementById('input_output').value.split('\n').length;
        var outarr = new Array();
        if (line_count_cache != line_count) {
            for (var x = 0; x < line_count; x++) {
                outarr[x] = (x + 1) + '.';
            }
            document.getElementById('line_counter').value = outarr.join('\n');
        }
        line_count_cache = line_count;
    }
}

var last_cache = '';
var cache_avl = 'no';

function cache_copy() {
    var last = document.getElementById('input_output').value;
    last_cache = last;
    cache_avl = 'yes';
}

function undo_last() {
    if (cache_avl == 'yes') {
        document.getElementById('input_output').value = last_cache;
        line_counter();
        if (count_is == 'on')
            totalcount();
    } else {
        alert('No more undos available.');
    }
    cache_avl = 'no';
}

var count_is = 'off';

function clratb() {
    count_is = 'off';
    document.getElementById('input_output').removeAttribute('onclick');
    document.getElementById('input_output').removeAttribute('onkeyup');
    document.getElementById('input_output').removeAttribute('onpaste');
    document.getElementById('input_output').removeAttribute('oncut');
    document.getElementById('input_output').removeAttribute('onmousedown');
    document.getElementById('input_output').removeAttribute('onmouseup');
    document.getElementById('input_output').removeAttribute('onblur');
}

function open_function(what_fun) {

    // Add Prefix and/or Suffix into Each Line
    if (what_fun == 'apaosiel') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                'Add this <b>prefix</b> into the beginning of each line:\n' +
                '</div>\n' +
                '<div>\n' +
                '<input type="text" id="prefix" value="" placeholder="Enter prefix here." style="width:100%;" />\n' +
                '</div>\n' +
                '<div>\n' +
                'Add this <b>suffix</b> into the end of each line:\n' +
                '</div>\n' +
                '<div>\n' +
                '<input type="text" id="suffix" value="" placeholder="Enter suffix here." style="width:100%;" />\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 0px 0px;">\n' +
                '<input type="button" value="Add Prefix and/or Suffix" onClick="addpresufx();" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Add Remove Line Breaks
    if (what_fun == 'arlb') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Remove all line breaks" onClick="removelinebreaks();" />\n' +
                'and replace the line break with this text:\n' +
                '<input type="text" id="replace_lb" value="" style="width:200px;">\n' +
                'Blank for nothing.\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 0px 0px;">\n' +
                '<input type="button" value="Make new line breaks" onClick="makelinebreaks();" />&nbsp;\n' +
                '<input type="radio" name="balb" id="before_lb" />before\n' +
                '<input type="radio" name="balb" id="after_lb" CHECKED />after\n' +
                'each occurrence of this text:\n' +
                '<input type="text" id="make_lb" value="" style="width:200px;" />&nbsp;\n' +
                '<span class="nowrap"><input type="checkbox" id="case_sen">Case sensitive.</span>\n' +
                '<span class="nowrap"><input type="checkbox" id="relb">Remove existing line breaks.</span>\n' +
                '</div>\n' +
                '<div style="padding:3px 0px 0px 0px">\n' +
                '<input type="button" value="Make new line breaks" onClick="newline();" />\n' +
                'every\n' +
                '<input type="text" id="new_line" maxlength="4" value="" style="width:60px;" />\n' +
                'characters.\n' +
                '<input type="checkbox" id="wordwrap_lb">Word wrap.\n' +
                '<input type="checkbox" id="escp_lb">Escape exisiting line breaks.\n' +
                '<input type="checkbox" id="remv_lb">Remove exisiting line breaks.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Binary Code
    if (what_fun == 'bcg') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Text to Binary" onClick="text2binary();" />\n' +
                '<input type="button" value="Binary to Text" onClick="binary2text();" />&nbsp;\n' +
                '<input type="checkbox" id="add_space" CHECKED />Space between bytes.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Combination Generator
    if (what_fun == 'combgen') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<b>Object Input Box</b> - Enter objects to combine with each on a new line.\n' +
                '<textarea id="combobjs" style="width:100%; margin-top:10px;" rows="4" wrap="off" onkeyup="combcntr();" onpaste="setTimeout(\'combcntr()\',250);" >\n' +
                'a\n' +
                'b\n' +
                'c\n' +
                'd</textarea>\n' +
                '</div>\n' +
                '<div style="padding-top:7px;">\n' +
                'Generate objects into combinations of\n' +
                '<input type="text" id="comblen" value="3" style="width:32px;" maxlength="1" onkeyup="combcntr();" />\n' +
                'which will produce\n' +
                '<input type="text" id="combcnt" value="64" size="7" READONLY />\n' +
                'sets.\n' +
                'Repeat objects: <input type="radio" name="rept" id="repty" onclick="combcntr();" CHECKED />yes\n' +
                '<input type="radio" name="rept" id="reptn" onclick="combcntr();" />no.\n' +
                '</div>\n' +
                '<div style="padding-top:4px;">\n' +
                'Prefix sets with:\n' +
                '<input type="text" id="setprefix" value="" size="4" />\n' +
                'Suffix sets with:\n' +
                '<input type="text" id="setsuffix" value="" size="4" />\n' +
                'Delimit objects with:\n' +
                '<input type="text" id="objdelimiter" value="" size="4" />\n' +
                'Join sets with:\n' +
                '<input type="text" id="objjoin" value="\\x" size="4" />\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Generate Combinations" onClick="gencombs();" />&nbsp;\n' +
                '<input type="checkbox" id="direct_save" />Skip box loading and directly save as file to prevent browser lockup.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Count Characters Words Sentences Lines
    if (what_fun == 'ccwsl') {
        count_is = 'on';
        tbdheight_cache = 'start';
        textboxlen_cache = 'start';
        linecnt_cache = 'start';
        mouseblock = 'no';
        lastfind = '';
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<table id="countdisplay">\n' +
                '<tr>\n' +
                '<td></td>\n' +
                '<td style="width:65px;">Character</td>\n' +
                '<td style="width:65px;">Word</td>\n' +
                '<td style="width:65px;">Sentence</td>\n' +
                '<td style="width:65px;">Line</td>\n' +
                '<td style="width:65px;">Column</td>\n' +
                '</tr><tr id="curpos">\n' +
                '<td>Cursor position:</td>\n' +
                '<td><span id="cur_pos">0</span></td>\n' +
                '<td><span id="cur_word">0</span></td>\n' +
                '<td><span id="cur_sent">0</span></td>\n' +
                '<td><span id="cur_line">0</span></td>\n' +
                '<td><span id="colm_count">0</span></td>\n' +
                '</tr><tr id="tcnts">\n' +
                '<td>Total count is:</td>\n' +
                '<td><span id="char_count">0</span></td>\n' +
                '<td><span id="word_count">0</span></td>\n' +
                '<td><span id="sent_count">0</span></td>\n' +
                '<td><span id="line_count">0</span></td>\n' +
                '<td></td>\n' +
                '</tr><tr id="scnts">\n' +
                '<td>Selected count is:</td>\n' +
                '<td><span id="sel_char_count">0</span></td>\n' +
                '<td><span id="sel_word_count">0</span></td>\n' +
                '<td><span id="sel_sent_count">0</span></td>\n' +
                '<td><span id="sel_line_count">0</span></td>\n' +
                '<td></td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '<div style="padding:7px 0px 0px 0px;">\n' +
                '<input type="button" value="Count Text" onClick="totalcount();" />&nbsp;\n' +
                '<input type="checkbox" title="" id="inst" onClick="totalcount();" CHECKED />Instant.\n' +
                '<span style="display:inline-block; padding:3px 3px 3px 3px; background-color:#FDCDCD;">Do not count\n' +
                '<input type="checkbox" title="Do not count spaces." id="no_spaces" onclick="totalcount();">spaces\n' +
                '<input type="checkbox" title="Do not count HTML tags." id="skip_html" onclick="totalcount();">HTML tags.</span>\n' +
                '<input type="checkbox" title="Count line breaks as spaces." id="linebreak_as_space" onclick="totalcount();">Count line breaks as spaces.\n' +
                '</div>\n' +
                '<div style="padding:7px 0px 0px 0px;">\n' +
                '<textarea id="custom_count_query" style="width:100%; margin:0px 0px 7px 0px;" rows="4" wrap="off" placeholder="Enter custom count item here." oninput="customcount();"></textarea>\n' +
                '<input type="text" id="custom_count" value="0" size="7" READONLY />&nbsp;\n' +
                '<input type="checkbox" title="Make custom count case sensitive." onclick="customcount();" id="case_sen" />Case sensitive.\n' +
                '<input type="button" value="Word Frequency Count / Unique Words List" onClick="if(document.getElementById(\'input_output\').value != \'\') wrdfrq(\'open\');" />\n' +
                '</div>\n' +
                '</div>\n';
        document.getElementById('input_output').setAttribute('onclick', 'cpcount();');
        document.getElementById('input_output').setAttribute('onkeyup', 'cpcount(); if(document.getElementById(\'inst\').checked == true) totalcount();');
        document.getElementById('input_output').setAttribute('onpaste', 'if(document.getElementById(\'inst\').checked==true) mouseblock = \'yes\'; setTimeout(\'totalcount()\',250);');
        document.getElementById('input_output').setAttribute('oncut', 'if(document.getElementById(\'inst\').checked == true) setTimeout(\'totalcount()\',250);');
        document.getElementById('input_output').setAttribute('onmousedown', 'cntonsel(\'start\');');
        document.getElementById('input_output').setAttribute('onmouseup', 'cntonsel(\'stop\');');
        document.getElementById('input_output').setAttribute('onblur', 'cpcount(\'blur\');');
        totalcount();
    }

    // Disemvowel
    if (what_fun == 'disvwl') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                'Remove letters: <input type="text" id="vowels" value="aeiou" style="width:180px;" />\n' +
                '<input type="button" value="Disemvowel" onClick="disemvowel();" />\n' +
                'Enter disemvoweled word:\n' +
                '<input type="text" id="revowelin" value="" size="10" />\n' +
                '<input type="button" value="ReEmVowel" onClick="if(document.getElementById(\'revowelin\').value != \'\') {revowel();}" />\n' +
                '<input type="text" id="revowelout" placeholder="ReEmVoweled results will display here." style="width:100%; margin-top:7px;" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Encrypt Decrypt
    if (what_fun == 'edt') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Encrypt Text" onClick="encrypt();" />\n' +
                '<input type="button" value="Decrypt Text" onClick="decrypt();" />\n' +
                'Password:\n' +
                '<input type="text" id="password" maxlength="16" value="" style="width:200px;" onKeyup="cntpass();" onPaste="setTimeout(\'cntpass()\',500);" />\n' +
                '<span id="pcount">0</span>\n' +
                '<input type="button" value="Generate Password" onClick="genradpas();" />\n' +
                '</div>\n' +
                '<div>\n' +
                'Text will be encrypted/decrypted using Tiny Encryption Algorithm (TEA) and base64.\n' +
                'Read more about TEA at: <a rel="nofollow" target="_blank" href="http://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm" style="color:#0000FF;">http://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm</a>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Extract Delimited Column
    if (what_fun == 'edc') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div style="padding:0px 0px 7px 0px;">\n' +
                'Columns delimited by this text:\n' +
                '<input type="text" id="delimiter_is" value="" style="width:200px;" />&nbsp;\n' +
                'Extract column #\n' +
                '<input type="text" id="col_num" value="1" style="width:60px;" />\n' +
                '<input type="button" value="Load File" /><input type="file" id="file1" onChange="setTimeout(\'loadfile(&#92;&#39;file1&#92;&#39;,&#92;&#39;input&#92;&#39;)\',100);" />\n' +
                '</div>\n' +
                '<textarea id="input" style="width:100%;" rows="4" wrap="off" placeholder="Enter delimited text here."></textarea>\n' +
                '<div style="padding:7px 0px 7px 0px;">\n' +
                '<input type="button" class="buttn" value="Extract Column" onClick="grabcolumn();" />&nbsp;\n' +
                'Enter column number to be extracted (1, 2, 3, etc.) and delimiter that seperates columns i.e character, word, segment of html code, etc.\n' +
                'To swap/rearrange columns, extract all columns and merge with the join lines tool.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Find and Replace Text
    if (what_fun == 'far') {
        clratb();
        enableregex = 'no';
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div id="findfielddiv">\n' +
                '<div>Find this: <input type="checkbox" id="regex_srch" onclick="far_regexsrch();" />Enable regular expression.</div>\n' +
                '<div style="padding-top:8px;"><textarea id="find_this" style="width:100%;" rows="4" wrap="off" placeholder="Enter find text here."></textarea></div>\n' +
                '</div>\n' +
                '<div style="padding:2px 0px 4px 0px;">Replace with:</div>\n' +
                '<textarea id="replace_with" style="width:100%;" rows="4" wrap="off" placeholder="Enter replace text here."></textarea>\n' +
                '<div style="padding:7px 0px 7px 0px;">\n' +
                '<input type="button" value="Find and Replace" onClick="replacetext();" />&nbsp;\n' +
                '<input title="Case Sensitive" type="checkbox" id="globl" CHECKED />Global matching.\n' +
                '<input title="Case Sensitive" type="checkbox" id="case_sen" />Case sensitive.\n' +
                '<span id="found"></span></div>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Generate List of Numbers
    if (what_fun == 'glon') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                'Make a list of numbers starting at\n' +
                '<input style="width:85px;" type="text" id="low_num" maxlength="7" value="1">\n' +
                'ending at\n' +
                '<input style="width:85px;" type="text" id="high_num" maxlength="7" value="100">&nbsp;\n' +
                '<input type="checkbox" id="pad_num">Pad (001...010...100)</div>\n' +
                '<div style="padding-top:4px;">\n' +
                'Prefix numbers with:\n' +
                '<input style="width:85px;" type="text" id="prefix" value="">\n' +
                'and/or suffix with:\n' +
                '<input style="width:85px;" type="text" id="suffix" value="">\n' +
                'Join with: <input type="text" id="delimiter" value="\\x" style="width:85px;" />\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" onClick="gennumlst();" value="Generate List of Numbers" />&nbsp;\n' +
                '<input type="checkbox" id="direct_save" />Skip box loading and directly save as file to prevent browser lockup.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Join Lines
    if (what_fun == 'jlbl') {
        clratb();
        numofbxs = 2;
        tabcnt = 4;
        bxcnt = 1;
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div id="inptdiv" style="width:100%; overflow-x:scroll; white-space:nowrap; padding:4px 0px 3px 0px;">\n' +
                '<table id="inpbxs"><tr>\n' +
                '<td><div style="margin:0px 6px 0px 0px; text-align:center;">Prefix<br /><input type="text" id="pref" value="" style="width:85px;" /></div></td>\n' +
                '<td><div style="text-align:center;"><div style="padding:0px 0px 3px 0px;"><b>Input 1</b> <input type="button" value="Load File" /><input type="file" id="file0" onChange="setTimeout(\'loadfile(&#92;&#39;file0&#92;&#39;,&#92;&#39;input0&#92;&#39;)\',100);" /></div><textarea id="input0" rows="4" style="width:200px;" wrap="off" onkeyup="cntlns(\'input0\');" onpaste="setTimeout(\'cntlns(&#92;&#39;0&#92;&#39;)\',100);"></textarea><div style="padding:3px 0px 0px 0px;">Line count: <span id="lcinput0">0</span></div></div></td>\n' +
                '<td><div style="margin:0px 6px 0px 6px; text-align:center;">Delimiter<br /><input type="text" id="delm0" value="" style="width:85px;" /></div></td>\n' +
                '<td><div style="text-align:center;"><div style="padding:0px 0px 3px 0px;"><b>Input 2</b> <input type="button" value="Load File" /><input type="file" id="file1" onChange="setTimeout(\'loadfile(&#92;&#39;file1&#92;&#39;,&#92;&#39;input1&#92;&#39;)\',100);" /></div><textarea id="input1" rows="4" style="width:200px;" wrap="off" onkeyup="cntlns(\'input1\');" onpaste="setTimeout(\'cntlns(&#92;&#39;1&#92;&#39;)\',100);"></textarea><div style="padding:3px 0px 0px 0px;">Line count: <span id="lcinput1">0</span></div></div></td>\n' +
                '<td><div style="margin:0px 0px 0px 6px; text-align:center;">Suffix<br /><input type="text" id="sufx" value="" style="width:85px;" /><br /><input type="button" value=" Add box. " onClick="addbox();" /></div></td>\n' +
                '</tr></table>\n' +
                '</div>\n' +
                '<div style="padding:7px 0px 7px 0px;">\n' +
                '<input type="button" value="Join Lines" onClick="merge();" />\n' +
                'Fill voids with\n' +
                '<input type="text" id="fill" value="" style="width:60px;" />\n' +
                'Join sets with\n' +
                '<input type="text" id="joinsets" value="\\x" style="width:60px;" />\n' +
                '<input type="button" value="Clear Input" onClick="clearinput();" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Letter Case Converter
    if (what_fun == 'lcc') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Uppercase" onClick="upperc();" />\n' +
                '<input type="button" value="Lowercase" onClick="lowerc();" />\n' +
                '<input type="button" value="Randomcase" onClick="radcse();" />\n' +
                '<input type="button" value="First letter each word uppercase." onClick="fstletwrduc();" />\n' +
                '<input type="button" value="First letter each sentence uppercase." onClick="sentfstuc();" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Number Each Line
    if (what_fun == 'nel') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                'Start the line count at\n' +
                '<input style="width:85px;" type="text" id="start_count" maxlength="7" value="1" />\n' +
                'and\n' +
                '<input type="checkbox" id="pad_num" />pad* numbers. *i.e. 001...010...100\n' +
                '</div>\n' +
                '<div style="padding-top:4px;">\n' +
                'Prefix line number with:\n' +
                '<input type="text" id="prefix" maxlength="100" value="" style="width:200px;" />\n' +
                'e.g. enter "#" for "#001"\n' +
                '</div>\n' +
                '<div style="padding-top:4px;">\n' +
                'Suffix line number with:\n' +
                '<input type="text" id="suffix" maxlength="100" value="" style="width:200px;" />\n' +
                'e.g. enter "." for "001."\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Number Each Line Left" onClick="num2line(\'left\');" />\n' +
                '<input type="button" value="Number Each Line Right" onClick="num2line(\'right\');" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Permutation Generator
    if (what_fun == 'permgen') {
        clratb();
        lastdivnum = 1;
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div style="width:100%; height:205px; overflow-y:scroll; margin-top:7px;">\n' +
                '<table style="width:100%;">\n' +
                '<tr><td style="width:75px; margin-top:0px;">Object 01</td><td><input type="text" id="permobj1" value="" style="width:99%; margin-top:0px;" onkeyup="cnthlite(\'1\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;1&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:0px;"><span id="cnthlite1">&nbsp;1&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 02</td><td><input type="text" id="permobj2" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'2\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;2&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite2">&nbsp;2&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 03</td><td><input type="text" id="permobj3" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'3\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;3&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite3">&nbsp;6&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 04</td><td><input type="text" id="permobj4" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'4\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;4&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite4">&nbsp;24&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 05</td><td><input type="text" id="permobj5" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'5\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;5&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite5">&nbsp;120&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 06</td><td><input type="text" id="permobj6" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'6\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;6&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite6">&nbsp;720&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 07</td><td><input type="text" id="permobj7" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'7\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;7&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite7">&nbsp;5040&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 08</td><td><input type="text" id="permobj8" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'8\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;8&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite8">&nbsp;40320&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin-top:7px;">Object 09</td><td><input type="text" id="permobj9" value="" style="width:99%; margin-top:7px;" onkeyup="cnthlite(\'9\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;9&#92;&#39;)\',100);" /></td><td style="width:80px; margin-top:7px;"><span id="cnthlite9">&nbsp;362880&nbsp;</span></td></tr>\n' +
                '<tr><td style="width:75px; margin:7px 0px 0px 0px;">Object 10</td><td><input type="text" id="permobj10" value="" style="width:99%; margin:7px 0px 0px 0px;" onkeyup="cnthlite(\'10\');" onpaste="setTimeout(\'cnthlite(&#92;&#39;10&#92;&#39;)\',100);" /></td><td style="width:80px; margin:7px 0px 0px 0px;"><span id="cnthlite10">&nbsp;3628800&nbsp;</span></td></tr>\n' +
                '</table>\n' +
                '</div>\n' +
                '<div style="padding-top:7px;">\n' +
                'Prefix sets with:\n' +
                '<input type="text" id="setprefix" value="" size="4" />\n' +
                'Suffix sets with:\n' +
                '<input type="text" id="setsuffix" value="" size="4" />\n' +
                'Delimit objects with:\n' +
                '<input type="text" id="objdelimiter" value="" size="4" />\n' +
                'Join sets with:\n' +
                '<input type="text" id="objjoin" value="\\x" size="4" />\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Generate Permutations" onClick="permute();" />&nbsp;\n' +
                '<input type="checkbox" id="direct_save" />Skip box loading and directly save as file to prevent browser lockup.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Random Number Generator
    if (what_fun == 'rng') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                'Generate\n' +
                '<input type="text" id="howmany" maxlength="6" value="10" style="width:60px;" />\n' +
                'random numbers from low of\n' +
                '<input type="text" id="lownum" maxlength="17" value="1" style="width:80px;" />\n' +
                'to high of\n' +
                '<input type="text" id="highnum" maxlength="17" value="1000" style="width:95px;" />\n' +
                '</div>\n' +
                '<div style="padding-top:4px;">\n' +
                'Prefix:\n' +
                '<input type="text" id="prefix" value="" style="width:80px;" />\n' +
                'and/or suffix:\n' +
                '<input type="text" id="suffix" value="" style="width:80px;" />\n' +
                'each number. Join with:\n' +
                '<input type="text" id="outputdelimiter" value="\\x" style="width:80px;" />\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Generate Random Numbers" onClick="radnum();" />&nbsp;\n' +
                '<input type="checkbox" id="padnums" />Pad numbers.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Random String Generator
    if (what_fun == 'rsg') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div style="padding:0px 0px 7px 0px;">\n' +
                '<b>Object Input Box:</b> Each input object is delimited by:\n' +
                '<input type="text" id="inputdelimiter" value="" style="width:80px;" onClick="document.getElementById(\'in_nl\').checked=false;" />&nbsp;\n' +
                '<input type="checkbox" id="in_nl" onClick="document.getElementById(\'inputdelimiter\').value=\'\';" />line break.\n' +
                '</div>\n' +
                '<textarea id="input" style="width:100%;" rows="4" wrap="off">\n' +
                'abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</textarea>\n' +
                '<div style="padding-top:7px;">\n' +
                'Generate\n' +
                '<input type="text" id="howmany" maxlength="6" value="10" style="width:80px;" />\n' +
                'random strings\n' +
                '<input type="text" id="stringlength" maxlength="5" value="14" style="width:70px;" />\n' +
                'objects in length.\n' +
                'Add this prefix:\n' +
                '<input type="text" id="prefix" value="" style="width:80px;" />\n' +
                'and/or suffix:\n' +
                '<input type="text" id="suffix" value="" style="width:80px;" />\n' +
                'to each string.\n' +
                '</div>\n' +
                '<div style="padding-top:4px;">\n' +
                'Delimit objects within random strings with:\n' +
                '<input type="text" id="elementdelimiter" value="" style="width:80px;" />\n' +
                'and delimit each random string with:\n' +
                '<input type="text" id="setdelimiter" value="" style="width:80px;" onFocus="document.getElementById(\'set_nl\').checked=false" />&nbsp;\n' +
                '<input type="checkbox" id="set_nl" onClick="document.getElementById(\'setdelimiter\').value=\'\'" CHECKED />line break.\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Generate random strings." onClick="radstr();" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Remove Duplicate Lines
    if (what_fun == 'rdl') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Remove Duplicate Lines" onClick="rduplin();" />&nbsp;\n' +
                '<input type="checkbox" id="case_sen" />Case sensitive.\n' +
                '<input type="checkbox" id="rel" />Remove empty lines.\n' +
                '<input type="checkbox" id="dis_rem" onClick="if(this.checked==true)document.getElementById(\'removed_div\').style.display=\'block\'; if(this.checked==false)document.getElementById(\'removed_div\').style.display=\'none\';" />Display removed.\n' +
                '<span id="removed"></span>\n' +
                '</div>\n' +
                '<div id="removed_div" style="display:none; padding-top:10px;">\n' +
                '<textarea id="removed_output" rows="4" style="width:100%;" wrap="off">\n' +
                'Removed Line Box - Removed lines will display here.\n' +
                'Removed lines will be prefixed with their duplicate info* for reference and analysis. *e.g. (Line 10 was a duplicate of line 9.)</textarea>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Remove Empty Lines
    if (what_fun == 'rel') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Remove Empty Lines" onClick="rel();" />&nbsp;\n' +
                '<input type="checkbox" id="rwhitespace" CHECKED />Remove lines containing only whitespace.\n' +
                '<span id="removed"></span>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Remove Letter Accents
    if (what_fun == 'rla') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value=" Remove Letter Accents " onClick="remacc();" />&nbsp;\n' +
                '<span id="removed"></span>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Remove Line Containing
    if (what_fun == 'rlc') {
        clratb();
        fieldnum = 0;
        fieldtype = '';
        cacherem = 'no';
        enableregex = 'no';
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div style="padding-top:5px;">Search lines for:</div>\n' +
                '<div id="inputfields" style="padding-top:4px;">\n' +
                '<input type="text" id="addfield0" value="" style="width:100%;" />\n' +
                '</div>\n' +
                '<div id="addfielddiv" style="padding-top:4px;">\n' +
                'Add <input type="button" id="andbttn" value="AND" onClick="addfield(\'andfield\');" />\n' +
                '<input type="button" id="orbttn" value="OR" onClick="addfield(\'orfield\');" /> search field.\n' +
                '<input type="button" value="Reset" onClick="addfield(\'reset\');" />&nbsp;\n' +
                '<input type="checkbox" id="regex_srch" onclick="rlc_regexsrch();" />Enable regular expression search.\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Remove Lines Containing..." onClick="if(document.getElementById(\'addfield0\').value!=\'\') {removelines(\'containing\');}" />\n' +
                '<input type="button" value="Not Containing..." onClick="if(document.getElementById(\'addfield0\').value!=\'\') {removelines(\'notcontaining\');}" />&nbsp;\n' +
                '<input type="checkbox" id="case_sen" />Case sensitive.\n' +
                '<input type="checkbox" id="dremoved" onclick="disrem();" />Display removed.\n' +
                '<span id="removed"></span>\n' +
                '</div>\n' +
                '<textarea id="removed_box" rows="4" style="display:none; width:100%;" wrap="off">\n' +
                'Removed Line Box - Removed/extracted lines will display here.</textarea>\n' +
                '</div>\n';
    }

    // Remove Unwanted Spaces
    if (what_fun == 'rus') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Remove" onClick="remes();" />&nbsp;\n' +
                '<input type="checkbox" name="ltspc" id="ltspc" CHECKED />Trim leading/trailing whitespaces from lines.\n' +
                '<input type="radio" name="remspc" CHECKED />Remove unwanted spaces.\n' +
                '<input type="radio" name="remspc" id="remall" />Remove all spaces.\n' +
                '<span id="removed"></span>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Reverse Flip Upsidedown
    if (what_fun == 'rfu') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" onClick="reversetext();" value="Reverse Text" />\n' +
                '<input type="button" onClick="fliptext();" value="Flip Text" />\n' +
                '<input type="button" onClick="reversewords();" value="Reverse Wording" />\n' +
                '<input type="button" onClick="flipwords();" value="Flip Wording" />\n' +
                '<input type="button" onClick="reversewordletters();" value="Reverse Each Word\'s Lettering" />\n' +
                '<input type="button" onClick="flipupsidedown();" value="Upside Down" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // ROT13 Caesar Cipher
    if (what_fun == 'rot') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Encode/Decode ROT13" onClick="encodedecodetext();" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Scramble Descramble Words
    if (what_fun == 'sdw') {
        clratb();
        wordlistlen = 0;
        wordlistsortarr = new Array();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Scramble each word\'s lettering." onClick="processing(\'loading\'); setTimeout(\'scram(&#92;&#39;&#115;&#99;&#109;&#92;&#39;)\',100);" />\n' +
                '<input type="button" value="Descramble words." onClick="processing(\'loading\'); setTimeout(\'scram(&#92;&#39;&#100;&#99;&#109;&#92;&#39;)\',100);" />\n' +
                '<span id="processing" style="color:#FF0000; font-weight:bold;"></span>\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Sort Lines
    if (what_fun == 'stl') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<div>\n' +
                'Sort by delimiter*\n' +
                '<input type="text" id="s_delimiter" style="width:80px;" value="">\n' +
                'at column number\n' +
                '<input type="text" id="s_num" style="width:60px;" maxlength="7" value="1">\n' +
                '*Blank for letters, space for words, etc.\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Alphabetical" onClick="ntvsort(\'ci\');" /><b>=</b><input type="button" style="border-left:0px;" value="Cs" onClick="ntvsort(\'cs\');" />\n' +
                '<input type="button" value="Natural" onClick="natsort(true);" /><b>=</b><input type="button" style="border-left:0px;" value="Cs" onClick="natsort(false);" />\n' +
                '<input type="button" value="Length" onClick="sortbylength();" />\n' +
                '<input type="button" value="Random" onClick="sortrandom();" />\n' +
                '<input type="button" value="Reverse" onClick="reverseorder();" />\n' +
                '</div>\n' +
                '</div>\n';
    }

    // String Randomizer
    if (what_fun == 'strad') {
        clratb();
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '<div>\n' +
                '<input type="button" value="Randomize String" onClick="ranzstr();" />\n' +
                'Delimiter:\n' +
                '<input type="text" id="ranzdelim" value="" style="width:80px;" />\n' +
                '</div>\n' +
                '<div>\n' +
                'Enter a delimiter to randomize string as delimited blocks of text. e.g. space will randomize word order. Leave blank to randomize all characters.\n' +
                '</div>\n' +
                '</div>\n';
    }

    // Unicode Converter
    if (what_fun == 'unicvr') {
        clratb();
        unitype = 'num';
        skiponlyspan_cache = 'skiponly_span1';
        document.getElementById('function_box').innerHTML =
                '<div class="fb_pad">\n' +
                '\<div style="padding-top:7px;">\n' +
                'Convert into:\n' +
                '<input type="radio" name="unictype" id="unictype_num" onclick="unicodetype(\'num\');" CHECKED />HTML decimal\n' +
                '<input type="radio" name="unictype" id="unictype_hex" onclick="unicodetype(\'hex\');" />HTML hex\n' +
                '<input type="radio" name="unictype" id="unictype_hex16" onclick="unicodetype(\'hex16\');" />UTF-16 hex\n' +
                '<input type="radio" name="unictype" id="unictype_num16" onclick="unicodetype(\'num16\');" />UTF-16 decimal\n' +
                '<input type="radio" name="unictype" id="unictype_hexsource" onclick="unicodetype(\'hexsource\');" />C/C++ source code.\n' +
                '</div>\n' +
                '<div style="padding-top:7px;">\n' +
                'Use\n' +
                '<input type="text" id="unidelimiterleft" value="&amp;#" style="width:60px;" />\n' +
                'as delimiter left and/or <input type="text" id="unidelimiterright" value=";" style="width:60px;" />\n' +
                'as delimiter right.\n' +
                '</div>\n' +
                '<div style="padding-top:6px;">\n' +
                '<span id="skiponly_span1" style="background-color:#FFFF99;">[<input type="radio" name="skiponly" id="skiponly_off" onclick="skiponlymode(\'off\',\'skiponly_span1\');" CHECKED />Off]</span>\n' +
                '<span id="skiponly_span2" style="background-color:#E1E1D2;">[<input type="radio" name="skiponly" id="skiponly_skip" onclick="skiponlymode(\'skip\',\'skiponly_span2\');" />Skip the characters below <input type="checkbox" id="skip_lb" /> and skip line breaks too.]</span>\n' +
                '<span id="skiponly_span3" style="background-color:#E1E1D2;">[<input type="radio" name="skiponly" id="skiponly_only" onclick="skiponlymode(\'only\',\'skiponly_span3\');" />Only encode the characters below <input type="checkbox" id="only_lb" /> and encode line breaks too.]</span>\n' +
                '<input type="text" id="skipchars_are" value="" style="width:100%; margin-top:8px;" />\n' +
                '</div>\n' +
                '<div style="padding:4px 0px 7px 0px;">\n' +
                '<input type="button" value="Convert into Unicode" onClick="ascii2unicode();" />\n' +
                '</div>\n' +
                '</div>\n';
    }
}

// Wrap is
function wrdwrpis(wrapis) {
    if (wrapis == 'on') {
        wrapis_cache = 'on';
        document.getElementById('input_output').setAttribute('wrap', 'soft');
    }
    if (wrapis == 'off') {
        wrapis_cache = 'off';
        document.getElementById('input_output').setAttribute('wrap', 'off');
    }
    line_counter();
}

// Select All Text
function select_all_text(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

// Clear All Text
function clear_all_text(id, mesg) {
    cache_copy();
    var conbol = confirm(mesg);
    if (conbol == true) {
        document.getElementById(id).value = '';
        line_counter();
    }
}

// Load Save File
function loadfile(fileid, loadid) {
    cache_copy();
    document.getElementById(loadid).value = 'Loading...';
    setTimeout(function () {
        loadfile2(fileid, loadid)
    }, 1000);
}

function loadfile2(fileid, loadid) {
    if (!window.FileReader) {
        document.getElementById(loadid).value = 'Your browser does not support HTML5 "FileReader" function required to open a file.';
    } else {
        fileis = document.getElementById(fileid).files[0];
        var fileredr = new FileReader();
        fileredr.onload = function (fle) {
            var filecont = fle.target.result;
            document.getElementById(loadid).value = filecont;
            line_counter();
            if (count_is == 'on')
                totalcount();
        }
        fileredr.readAsText(fileis);
    }
}

function savefile(direct_save, saveasid, saveid) {
    if (!window.Blob) {
        alert('Your browser does not support HTML5 "Blob" function required to save a file.');
    } else {
        var txtwrt = '';
        if (direct_save == 'yes') {
            txtwrt = saveid;
        } else {
            txtwrt = document.getElementById(saveid).value;
        }
        if (document.getElementById('dos').checked == true)
            txtwrt = txtwrt.replace(/\n/g, '\r\n');
        var textblob = new Blob([txtwrt], {type: 'text/plain'});
        var saveas = document.getElementById(saveasid).value;
        var dwnlnk = document.createElement('a');
        dwnlnk.download = saveas;
        dwnlnk.innerHTML = "Download File";
        if (window.webkitURL != null) {
            dwnlnk.href = window.webkitURL.createObjectURL(textblob);
        } else {
            dwnlnk.href = window.URL.createObjectURL(textblob);
            dwnlnk.onclick = destce;
            dwnlnk.style.display = 'none';
            document.body.appendChild(dwnlnk);
        }
        dwnlnk.click();
    }
}
function destce(event) {
    document.body.removeChild(event.target);
}

// Add Prefix and/or Suffix into Each Line
function addpresufx() {
    cache_copy();
    var prfx = document.getElementById('prefix').value;
    var sufx = document.getElementById('suffix').value;
    var text = document.getElementById('input_output').value.replace(/\r/g, '').split(/\n/);
    var textlen = text.length;
    var textarrout = new Array();
    for (var x = 0; x < textlen; x++) {
        textarrout[x] = prfx + text[x] + sufx;
    }
    textout = textarrout.join('\n');
    document.getElementById('input_output').value = textout;
}

// Add Remove Line Breaks
function removelinebreaks() {
    cache_copy();
    var chars = document.getElementById('replace_lb').value;
    var text = document.getElementById('input_output').value.replace(/\r/g, '').replace(/\n/g, chars);
    document.getElementById('input_output').value = text;
    line_counter();
}

function makelinebreaks() {
    cache_copy();
    var chare = document.getElementById('make_lb').value;
    var text = document.getElementById('input_output').value.replace(/\r/g, '');
    if (document.getElementById('relb').checked == true)
        text = text.replace(/\n/g, '');
    charin = chare.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    var rlb_flag = 'gi';
    if (document.getElementById('case_sen').checked == true)
        rlb_flag = 'g';
    if (document.getElementById('before_lb').checked == true) {
        text = text.replace(new RegExp('(' + charin + ')', rlb_flag), '\n$1');
    }
    if (document.getElementById('after_lb').checked == true) {
        text = text.replace(new RegExp('(' + charin + ')', rlb_flag), '$1\n');
    }
    document.getElementById('input_output').value = text;
    line_counter();
}

String.prototype.chunk = function (n) {
    if (typeof n == 'undefined')
        n = 2;
    return this.match(RegExp('.{1,' + n + '}', 'g'));
}

String.prototype.wordWrap = function (m, b, c) {
    var i, j, s, r = this.split('\n');
    if (m > 0)
        for (i in r) {
            for (s = r[i], r[i] = ''; s.length > m;
                    j = c ? m : (j = s.substr(0, m).match(/\S*$/)).input.length - j[0].length
                    || m, r[i] += s.substr(0, j) + ((s = s.substr(j)).length ? b : ''))
                ;
            r[i] += s;
        }
    return r.join('\n');
};

function newline() {
    cache_copy();
    var text = document.getElementById('input_output').value.replace(/\r/g, '');
    var nlnum = document.getElementById('new_line').value * 1;
    if (document.getElementById('remv_lb').checked == true) {
        text = text.replace(/\n/g, '');
    }
    if (document.getElementById('escp_lb').checked == true) {
        text = text.replace(/\n/g, '\\n');
    }
    if (document.getElementById('wordwrap_lb').checked == true) {
        text = text.wordWrap(nlnum, '\n', 0);
    } else {
        text = text.chunk(nlnum);
        text = text.join('\n');
        text = text.replace(/\n /g, '\n');
    }
    document.getElementById('input_output').value = text;
    line_counter();
}

// Binary Code
function pad(num, padnum) {
    var padlen = padnum - num.toString().length;
    var padding = '';
    for (var x = 0; x < padlen; x++) {
        padding = '0' + padding;
    }
    num = padding + num;
    return num;
}
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}

function text2binary() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    var delimiterright = ' ';
    if (document.getElementById('add_space').checked == false)
        delimiterright = '';
    text = text.replace(/\r/gi, '');
    text = text.split('\n');
    var textlen = text.length;
    var textout = new Array();
    var textlinearr = new Array();
    var textlinechar = '';
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    for (var x = 0; x < textlen; x++) {
        textlinearr = new Array();
        textline = text[x];
        textlinelen = textline.length;
        for (var y = 0; y < textlinelen; y++) {
            textlinechar = textline.charCodeAt(y).toString(2);
            textlinearr[y] = pad(textlinechar, 8) + delimiterright;
        }
        textout[x] = textlinearr.join('');
    }
    textout = textout.join('00001010' + delimiterright).trim();
    document.getElementById('input_output').value = textout;
    line_counter();
}

String.prototype.chunk = function (n) {
    if (typeof n == 'undefined')
        n = 2;
    return this.match(RegExp('.{1,' + n + '}', 'g'));
}

function binary2text() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '').replace(/\n/gi, '');
    text = text.trim();
    var delimiter = ' ';
    if (document.getElementById('add_space').checked == false)
        text = text.chunk(8).join(' ');
    textarr = text.split(delimiter);
    textarrlen = textarr.length;
    var textarrout = new Array();
    for (var x = 0; x < textarrlen; x++) {
        textarrout[x] = String.fromCharCode(parseInt(textarr[x], 2));
    }
    var textout = textarrout.join('');
    document.getElementById('input_output').value = textout;
    line_counter();
}

// Combination Generator
function combcntr() {
    var combobjscnt = document.getElementById('combobjs').value.replace(/\r/g, '').split('\n').length;
    var combobjslen = document.getElementById('comblen').value * 1;
    var grkgzrpunavp = 0;
    if (document.getElementById('repty').checked == true) {
        var combcnt = 1;
        for (var x = 0; x < combobjslen; x++) {
            combcnt = combcnt * combobjscnt;
        }
    }
    if (document.getElementById('reptn').checked == true) {
        var combcnt = combobjscnt;
        if (combobjslen > combobjscnt - 1) {
            alert('Combination can not be greater than input objects minus one.')
            document.getElementById('comblen').value = combobjscnt - 1;
            setTimeout('combcntr()', 100);
        }
        for (var x = 1; x < combobjslen; x++) {
            combobjscnt--;
            combcnt = combcnt * combobjscnt;
        }
    }
    document.getElementById('combcnt').value = combcnt;
    if (document.getElementById('combobjs').value == '' || combobjslen == 0)
        document.getElementById('combcnt').value = '0';
}

var pre = '';
var suf = '';
var delim = '';

//Credit to Jonas Raoni Soares Silva @ http://jsfromhell.com for basic script.

function combr(v, n) {
    for (var j, k, i = -1, l = v.length, q = Math.pow(l, n), r = new Array(q), c = (new Array(n + 1)).join(0).split(''); ++i < q; ) {
        for (r[i] = new Array(j = n), k = 1; j--; r[i][j] = v[c[j]], k && (++c[j] != l && --k, c[j] %= l))
            ;
        r[i] = pre + r[i].join(delim) + suf;
    }
    return r;
}

function combnr(a, n) {
    var o = a;
    if (n >= o.length)
        return [];
    for (var j, l, k, p, f, r, q = k = 1, i = (l = o.length) + 1, j = l - n; --i; i <= j ? q *= i : k *= i)
        ;
    for (x = [new Array(n), new Array(n), new Array(n), new Array(n)], j = q = k * q / q, k = l + 1, i = - 1; ++i < n; x[2][i] = i, x[1][i] = x[0][i] = j /= --k)
        ;
    for (r = new Array(q), p = - 1; ++p < q; r[p] = pre + r[p].join(delim) + suf)
        for (r[p] = new Array(n), i = - 1; ++i < n; !--x[1][i] && (x[1][i] = x[0][i], x[2][i] = (x[2][i] + 1) % l), r[p][i] = o[x[3][i]])
            for (x[3][i] = x[2][i], f = 0; !f; f = !f)
                for (j = i; j; )
                    if (x[3][--j] == x[2][i]) {
                        x[3][i] = x[2][i] = (x[2][i] + ++f) % l;
                        break;
                    }
    return r;
}
;

//Thanks and end.

function gencombs() {
    cache_copy();
    pre = document.getElementById('setprefix').value.replace(/\\x/g, '\n');
    suf = document.getElementById('setsuffix').value.replace(/\\x/g, '\n');
    delim = document.getElementById('objdelimiter').value.replace(/\\x/g, '\n');
    var joincombs = document.getElementById('objjoin').value.replace(/\\x/g, '\n');
    var combobjs = document.getElementById('combobjs').value.replace(/\r/g, '').split('\n');
    var combobjslen = document.getElementById('comblen').value * 1;
    var out = '';
    if (document.getElementById('repty').checked == true)
        out = combr(combobjs, combobjslen);
    if (document.getElementById('reptn').checked == true)
        out = combnr(combobjs, combobjslen);
    out = out.join(joincombs)
    if (document.getElementById('direct_save').checked == true) {
        savefile('yes', 'saveas', out)
    } else {
        document.getElementById('input_output').value = out;
        line_counter();
    }
}

// Count Characters Words Sentences Lines
function sentcnt(text) {
    var sentcont = text.replace(/\r/g, '').replace(/ \n/g, '\n') + '\n';
    var sentcont1 = sentcont.split('. ').length - 1;
    var sentcont1b = sentcont.split('.\n').length - 1;
    var sentcont2 = sentcont.split('! ').length - 1;
    var sentcont2b = sentcont.split('!\n').length - 1;
    var sentcont3 = sentcont.split('? ').length - 1;
    var sentcont3b = sentcont.split('?\n').length - 1;
    var countout = sentcont1 + sentcont1b + sentcont2 + sentcont2b + sentcont3 + sentcont3b;
    return countout;
}

function textcount(filecont) {
    if (document.getElementById('skip_html').checked == true)
        filecont = filecont.replace(/<\S[^><]*>/gi, '');
    if (document.getElementById('linebreak_as_space').checked == false && document.getElementById('no_spaces').checked == false)
        chr_cnt = filecont.replace(/[\r\n]/g, '').length;
    if (document.getElementById('no_spaces').checked == true)
        chr_cnt = filecont.replace(/[\r\n\s]/g, '').length;
    if (document.getElementById('linebreak_as_space').checked == true)
        chr_cnt = filecont.replace(/\r/g, '').replace(/\n/g, ' ').length;
    var wrdc = filecont.match(/\w+/g);
    if (wrdc != null)
        wrd_cnt = wrdc.length;
    else
        wrd_cnt = '0';
    snt_cnt = sentcnt(filecont);
    var linec = filecont.match(/\n/g);
    if (filecont != '') {
        if (linec != null)
            lne_cnt = linec.length + 1;
        else
            lne_cnt = '1';
    } else {
        lne_cnt = '0';
    }
}

function customcount() {
    var filecont = document.getElementById('input_output').value;
    if (document.getElementById('skip_html').checked == true)
        filecont = filecont.replace(/<\S[^><]*>/gi, '');
    var cst_cnt = 0;
    var customcntflags = 'gi';
    if (document.getElementById('case_sen').checked == true)
        customcntflags = 'g';
    var regxin = document.getElementById('custom_count_query').value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    if (regxin != '') {
        var customcnt = new RegExp(regxin, customcntflags);
        var custc = filecont.replace(/\r/g, '').match(customcnt);
        if (custc != null)
            cst_cnt = custc.length;
        else
            cst_cnt = '0';
    } else
        cst_cnt = '0';
    document.getElementById('custom_count').value = cst_cnt;
}

function totalcount() {
    var filecont = document.getElementById('input_output').value;
    textcount(filecont);
    document.getElementById('char_count').innerHTML = chr_cnt;
    document.getElementById('word_count').innerHTML = wrd_cnt;
    document.getElementById('sent_count').innerHTML = snt_cnt;
    document.getElementById('line_count').innerHTML = lne_cnt;
}

function cpcount(blr) {
    var textbox = document.getElementById('input_output');
    var tocarpos = '';
    if (blr != 'blur') {
        tocarpos = textbox.value.substring(0, textbox.selectionStart);
    }
    cntonsel('stop');
    textcount(tocarpos);
    document.getElementById('cur_pos').innerHTML = chr_cnt;
    document.getElementById('cur_word').innerHTML = wrd_cnt;
    document.getElementById('cur_sent').innerHTML = snt_cnt;
    document.getElementById('cur_line').innerHTML = lne_cnt;
    column_count();
}

var tbdheight_cache = 'start';
var textboxlen_cache = 'start';
var linecnt_cache = 'start';

function column_count() {
    var textbox = document.getElementById('input_output');
    var textboxlen = textbox.value.length;
    var textboxarr = textbox.value.split('\n');
    var linecnt = textboxarr.length;
    var linecnt = textboxarr.length;
    var selection_start = textbox.selectionEnd;
    var tocarpos = textbox.value.substring(0, selection_start);
    var tocurline = tocarpos.split('\n');
    tocurline.pop();
    var tocurlinelen = tocurline.join('\n').length;
    if (tocurline.length > 0)
        tocurlinelen = tocurlinelen + 1;
    tocarpos = textbox.value.substring(tocurlinelen, selection_start);
    if (document.activeElement.id != 'input_output')
        tocarpos = '';
    document.getElementById('colm_count').innerHTML = tocarpos.length;
}

var mouseblock = 'no';

function cntonsel(fun) {
    if (mouseblock == 'no') {
        var textbox = document.getElementById('input_output');
        if (fun == 'start')
            textbox.onmousemove = cntseled;
        if (fun == 'stop')
            textbox.onmousemove = null;
    } else
        mouseblock = 'no';
}

function cntseled() {
    var textbox = document.getElementById('input_output');
    var countselectedtext = '';
    countselectedtext = textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
    textcount(countselectedtext);
    document.getElementById('sel_char_count').innerHTML = chr_cnt;
    document.getElementById('sel_word_count').innerHTML = wrd_cnt;
    document.getElementById('sel_sent_count').innerHTML = snt_cnt;
    document.getElementById('sel_line_count').innerHTML = lne_cnt;
}

function wrdfrq(fun) {
    if (fun == 'open') {
        var textin = document.getElementById('input_output').value.toLowerCase();
        if (document.getElementById('skip_html').checked == true)
            textin = textin.replace(/<\S[^><]*>/gi, '');
        var wrdarr = textin.match(/\b(\w|')+\b/g);
        var wrdarrlen = wrdarr.length;
        var dupsremarr = new Array();
        var dupsremarrcnt = 0;
        var hash = {};
        var xkey = '';
        var hkey = '';
        var wrdcht = 0;
        var wrdcntpct = 0;
        for (var x = 0; x < wrdarrlen; x++) {
            xkey = wrdarr[x];
            hkey = ' ' + xkey;
            if (hash[hkey] == null || xkey == '') {
                hash[hkey] = x + 1;
                dupsremarr[dupsremarrcnt] = xkey;
                dupsremarrcnt++;
            }
        }
        wrdarr = ' ' + wrdarr.join(' ') + ' ';
        var word_list = dupsremarr.sort().join('\n');
        for (var x = 0; x < dupsremarrcnt; x++) {
            wrdcht = (wrdarr.split(' ' + dupsremarr[x] + ' ').length) - 1;
            wrdcntpct = (wrdcht / wrdarrlen) * 100;
            wrdcntpct = parseFloat(wrdcntpct).toFixed(2);
            dupsremarr[x] = '<tr class="wfctr" id="find_' + dupsremarr[x] + '"><td class="wfctd">' + dupsremarr[x] + '</td><td class="wfctd">' + wrdcht + '</td><td class="wfctd">' + wrdcntpct + '%</td></tr>';
        }
        dupsremarr = dupsremarr.sort().sort(function (a, b) {
            a = ((a.split('</td><td class="wfctd">'))[1]) * 1;
            b = ((b.split('</td><td class="wfctd">'))[1]) * 1;
            return b - a
        });
        document.getElementById('wrdfrq').style.zIndex = '2';
        document.getElementById('wrdfrq').style.width = '350px';
        document.getElementById('wrdfrq').style.height = '100%';
        document.getElementById('wrdfrq').style.overflow = 'scroll';
        document.getElementById('wrdfrq').innerHTML =
                '<input type="button" value="Close" onClick="wrdfrq(\'close\');" style="margin:10px 0px 0px 10px;" />' +
                '<div style="margin:10px 0px 0px 10px;"><input type="text" id="wordtofind" placeholder="Enter word." value="" size="15" style="margin:0px;" /> <input type="button" value="Find" onClick="findword();" style="margin:0px;" /></div>' +
                '<div style="margin:10px 10px 0px 10px;">' +
                '<table>\n' +
                '<tr class="wfctr"><td class="wfctd">word</td><td class="wfctd">count</td><td class="wfctd">percent</td></tr>\n' +
                dupsremarr.join('\n') +
                '</table>\n' +
                '<div style="padding:3px 0px 0px 0px;">\n' +
                'List of\n' +
                dupsremarrcnt +
                '\nunique words:\n' +
                '<textarea id="word_list" style="width:100%; margin:3px 0px 7px 0px;" rows="10" wrap="off">' +
                word_list +
                '</textarea>\n' +
                '<input type="button" value="Select All" onclick="select_all_text(\'word_list\');" />\n' +
                '</div>\n' +
                '<div>&nbsp;</div>' +
                '</div>';
    }
    if (fun == 'close') {
        document.getElementById('wrdfrq').style.zIndex = '-1';
        document.getElementById('wrdfrq').style.width = '0px';
        document.getElementById('wrdfrq').style.height = '0px';
        document.getElementById('wrdfrq').style.overflow = 'hidden';
        document.getElementById('wrdfrq').innerHTML = '';
    }
}

var lastfind = '';

function findword() {
    var wordtf = document.getElementById('wordtofind').value.toLowerCase();
    if (document.getElementById('find_' + wordtf)) {
        if (lastfind != '')
            document.getElementById('find_' + lastfind).style.backgroundColor = '#FFFFFF';
        document.getElementById('find_' + wordtf).scrollIntoView();
        document.getElementById('find_' + wordtf).style.backgroundColor = '#FFFF99';
        lastfind = wordtf;
    }
}

// Disemvowel
function remvwls(text) {
    var vowls = document.getElementById('vowels').value
    lets = text.split('');
    var textlen = lets.length;
    var textout = new Array();
    for (var x = 0; x < textlen; x++) {
        if (vowls.indexOf(lets[x].toLowerCase()) == -1)
            textout[x] = lets[x];
        else
            textout[x] = '';
    }
    text = textout.join('');
    return text;
}

function disemvowel() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    text = remvwls(text);
    document.getElementById('input_output').value = text;
    line_counter();
}

function revowel() {
    var revin = document.getElementById('revowelin').value.toLowerCase().replace(/ /gi, '');
    revin = remvwls(revin);
    var cwarr = wordlist.split(';');
    var cwarrlen = cwarr.length;
    var revoed = new Array();
    var cwvr = '';
    for (var x = 0; x < cwarrlen; x++) {
        cwvr = remvwls(cwarr[x]);
        if (revin == cwvr)
            revoed[x] = cwarr[x] + ' ';
        else
            revoed[x] = '';
    }
    revoed = revoed.join('').slice(0, -1);
    if (revoed == '')
        revoed = 'No results found.';
    document.getElementById('revowelout').value = revoed;
}

// Encrypt Decrypt
function genradpas() {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*-+=?';
    var charsarr = chars.split('');
    var pasoutarr = new Array();
    for (var x = 0; x < 16; x++) {
        pasoutarr[x] = charsarr[Math.floor(Math.random() * 73)];
    }
    var pasout = pasoutarr.join('');
    document.getElementById('password').value = pasout;
    document.getElementById('pcount').innerHTML = '16';
}

function cntpass() {
    var passw = document.getElementById('password').value;
    var passcnt = passw.length;
    document.getElementById('pcount').innerHTML = passcnt;
}

// Below is built from JavaScript implementation of TEA ©2000-2005 Chris Veness http://www.movable-type.co.uk/scripts/tea.html

var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function Str4ToLong(s) {
    var v = 0;
    for (var i = 0; i < 4; i++)
        v |= s.charCodeAt(i) << i * 8;
    return isNaN(v) ? 0 : v;
}

function LongToStr4(v) {
    var s = String.fromCharCode(v & 0xFF, v >> 8 & 0xFF, v >> 16 & 0xFF, v >> 24 & 0xFF);
    return s;
}

function escCtrlCh(str) {
    return str.replace(/[\0\t\n\v\f\r\xa0'"!]/g, function (c) {
        return '!' + c.charCodeAt(0) + '!';
    });
}
function unescCtrlCh(str) {
    return str.replace(/!\d\d?\d?!/g, function (c) {
        return String.fromCharCode(c.slice(1, -1));
    });
}
function code(v, k) {
    var y = v[0];
    z = v[1];
    var delta = 0x9E3779B9;
    var limit = delta * 32;
    var sum = 0;
    while (sum != limit) {
        y += (z << 4 ^ z >>> 5) + z ^ sum + k[sum & 3];
        sum += delta;
        z += (y << 4 ^ y >>> 5) + y ^ sum + k[sum >>> 11 & 3];
    }
    v[0] = y;
    v[1] = z;
}
function decode(v, k) {
    var y = v[0];
    z = v[1];
    var delta = 0x9E3779B9;
    var sum = delta * 32;
    while (sum != 0) {
        z -= (y << 4 ^ y >>> 5) + y ^ sum + k[sum >>> 11 & 3];
        sum -= delta;
        y -= (z << 4 ^ z >>> 5) + z ^ sum + k[sum & 3];
    }
    v[0] = y;
    v[1] = z;
}

function encrypt() {
    cache_copy();
    var v = new Array(2);
    var k = new Array(4);
    var s = '';
    var i = '';
    var plaintext = escape(document.getElementById('input_output').value);
    var password = document.getElementById('password').value;
    for (var i = 0; i < 4; i++)
        k[i] = Str4ToLong(password.slice(i * 4, (i + 1) * 4));
    for (i = 0; i < plaintext.length; i += 8) {
        v[0] = Str4ToLong(plaintext.slice(i, i + 4));
        v[1] = Str4ToLong(plaintext.slice(i + 4, i + 8));
        code(v, k);
        s += LongToStr4(v[0]) + LongToStr4(v[1]);
    }
    var input = escCtrlCh(s);
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    document.getElementById('input_output').value = output;
    line_counter();
}

function decrypt() {
    cache_copy();
    var input = document.getElementById('input_output').value;
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output += String.fromCharCode(chr1);
        if (enc3 != 64) {
            output += String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output += String.fromCharCode(chr3);
        }
    }
    output = output.toString();
    var v = new Array(2);
    var k = new Array(4);
    var s = '';
    var i = '';
    var ciphertext = unescCtrlCh(output);
    var password = document.getElementById('password').value;
    for (var i = 0; i < 4; i++)
        k[i] = Str4ToLong(password.slice(i * 4, (i + 1) * 4));
    for (i = 0; i < ciphertext.length; i += 8) {
        v[0] = Str4ToLong(ciphertext.slice(i, i + 4));
        v[1] = Str4ToLong(ciphertext.slice(i + 4, i + 8));
        decode(v, k);
        s += LongToStr4(v[0]) + LongToStr4(v[1]);
    }
    s = s.replace(/\0+$/, '');
    document.getElementById('input_output').value = unescape(s);
    line_counter();
}

// End of JavaScript implementation of TEA

// Extract Delimited Column
function grabcolumn() {
    cache_copy();
    var text = document.getElementById('input').value.replace(/\r/g, '');
    text = text.split('\n');
    textlen = text.length;
    var delim = document.getElementById('delimiter_is').value;
    var col_num = document.getElementById('col_num').value - 1;
    var out = new Array();
    var colarr = new Array();
    var col = '';
    for (var x = 0; x < textlen; x++) {
        colarr = text[x].split(delim);
        col = colarr[col_num];
        if (col != undefined)
            col = col;
        else
            col = '';
        out[x] = col;
    }
    document.getElementById('input_output').value = out.join('\n');
    line_counter();
}

// Find and Replace Text
var enableregex = 'no';

function replacetext() {
    cache_copy();
    var searchfor = '';
    var replacewith = document.getElementById('replace_with').value.replace(/\r/gi, '');
    var text = document.getElementById('input_output').value.replace(/\r/gi, '')
    var flagg = 'g';
    var flagi = 'i';
    var flagm = '';
    if (document.getElementById('globl').checked == false)
        flagg = '';
    if (document.getElementById('case_sen').checked == true)
        flagi = '';
    if (document.getElementById('multi_line') != null)
        if (document.getElementById('multi_line').checked == true)
            flagm = 'm';
    var flags = flagg + flagi + flagm;
    if (enableregex == 'yes')
        searchfor = document.getElementById('find_this_regex').value;
    else
        searchfor = document.getElementById('find_this').value.replace(/\r/gi, '').replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    var killfun = 'no';
    try {
        var searchexp = new RegExp(searchfor, flags);
    } catch (err) {
        alert('Something is incorrect (' + err + ') within your regular expression.\nBe sure special characters .*+?^=!:${}()|\\ used as literals have been escaped with a backslash.');
        killfun = 'yes';
    }
    if (killfun == 'no') {
        var rcount = 0;
        var matched = text.match(searchexp);
        if (matched != null)
            rcount = matched.length;
        text = text.replace(searchexp, replacewith);
        document.getElementById('input_output').value = text;
        document.getElementById('found').innerHTML = rcount + ' found and replaced.';
        line_counter();
    }
}

function far_regexsrch() {
    var chkedstate = document.getElementById('regex_srch').checked;
    if (chkedstate == true) {
        enableregex = 'yes';
        document.getElementById('findfielddiv').innerHTML =
                '<div>Find this: <input type="checkbox" id="regex_srch" onclick="far_regexsrch();" CHECKED />Enable regular expression. <input type="checkbox" id="multi_line" />Multiline matching.</div>' +
                '<div style="padding-top:8px;"><input type="text" id="find_this_regex" value="" placeholder="Enter regular expression here." style="width:100%; margin-top:0px; margin-bottom:0px;" /></div>' +
                '<div style="padding:7px 10px 10px 10px; margin-top:10px; background-color:#FFFFCC; border-radius:12px;">' +
                'Examples: <b>|</b> Find <b>a</b> or <b>b</b> or <b>c</b> and replace with <b>d</b>. Enter <b>a|b|c</b> into find and <b>d</b> into the replace. <b>|</b> ' +
                'Insert <b>a</b> and <b>b</b> around <b>c</b>. Enter <b>(c)</b> into find and <b>a$1b</b> into replace. <b>|</b> ' +
                'Swap <b>a</b> and <b>b</b> positions. Enter <b>(a)(b)</b> into find and <b>$2$1</b> into replace. <b>|</b> ' +
                'Replace <b>a</b> if followed by <b>b</b> with <b>c</b>. Enter <b>a(?=b)</b> into find and <b>c</b> into replace. <b>|</b> ' +
                'Remember to escape special characters .*+?^=!:${}()|\\ with a backslash when used as literals within a regular expression. ' +
                'Learn more about regular expressions visit <a rel="nofollow" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" style="color:#0000FF;">developer.mozilla.org</a>.' +
                '</div>';
    } else {
        enableregex = 'no';
        document.getElementById('findfielddiv').innerHTML =
                '<div>Find this: <input type="checkbox" id="regex_srch" onclick="far_regexsrch();" />Enable regular expression.</div>' +
                '<div style="padding-top:8px;"><textarea id="find_this" style="width:100%;" rows="4" wrap="off" placeholder="Enter find text here."></textarea></div>';
    }
}

// Generate List of Numbers
function gennumlst() {
    cache_copy();
    var prex = document.getElementById('prefix').value.replace(/\\x/g, '\n');
    var sufx = document.getElementById('suffix').value.replace(/\\x/g, '\n');
    var delimiter = document.getElementById('delimiter').value.replace(/\\x/g, '\n');
    var low = document.getElementById('low_num').value.replace(/\-/g, '') * 1;
    var high = document.getElementById('high_num').value.replace(/\-/g, '') * 1;
    var textout = new Array();
    var len = (high - low) + 1;
    var sca = low;
    var padnum = 0;
    var padnumto = high.toString().length;
    var padnumlen = 0;
    if (document.getElementById('pad_num').checked == true) {
        for (var x = 0; x < len; x++) {
            padnum = x + sca;
            padnumlen = padnum.toString().length;
            for (var y = padnumlen; y < padnumto; y++) {
                padnum = '0' + padnum;
            }
            textout[x] = prex + padnum + sufx;
        }
    }
    if (document.getElementById('pad_num').checked == false) {
        for (var x = 0; x < len; x++) {
            textout[x] = prex + (x + sca) + sufx;
        }
    }
    textout = textout.join(delimiter);
    if (document.getElementById('direct_save').checked == true) {
        savefile('yes', 'saveas', textout)
    } else {
        document.getElementById('input_output').value = textout;
        line_counter();
    }
}

// Letter Case Converter
function upperc() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.toUpperCase();
    document.getElementById('input_output').value = text;
}

function lowerc() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.toLowerCase();
    document.getElementById('input_output').value = text;
}

function capsent(str) {
    return str.replace(/[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
}

function sentfstuc() {
    cache_copy();
    var text = document.getElementById('input_output').value.replace(/\r/g, '');
    document.getElementById('input_output').value = capsent(text);
}

function capwrd(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
}

function fstletwrduc() {
    cache_copy();
    var text = document.getElementById('input_output').value.replace(/\r/g, '');
    document.getElementById('input_output').value = capwrd(text);
}

String.prototype.radcse = function () {
    var toup = this;
    toup = toup.split('');
    toupout = new Array();
    touplen = toup.length;
    var randm = 1;
    var sec = 'abcdefghijklmnopqrstuvwxyz';
    var rep = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var y = 0; y < touplen; y++) {
        randm = Math.floor(Math.random() * 2);
        if (sec.indexOf(toup[y]) != -1) {
            if (randm != 0)
                caseout = rep[sec.indexOf(toup[y])];
            else
                caseout = toup[y];
        } else
            caseout = toup[y];
        toupout[y] = caseout;
    }
    toupout = toupout.join('')
    return toupout;
}

function radcse() {
    cache_copy();
    var text = document.getElementById('input_output').value.toLowerCase();
    var textout = new Array();
    text = text.replace(/\r/g, '').toLowerCase();
    text = text.split('\n');
    var textcnt = text.length;
    for (var x = 0; x < textcnt; x++) {
        textout[x] = text[x].radcse();
    }
    textout = textout.join('\n');
    document.getElementById('input_output').value = textout;
}

// Join Lines
function clearinput() {
    for (var x = 0; x < numofbxs; x++) {
        document.getElementById('input' + x).value = '';
        document.getElementById('lcinput' + x).innerHTML = '0';
    }
    cntlns();
}

function cntlns(boxid) {
    if (document.getElementById(boxid).value != '') {
        var lines = document.getElementById(boxid).value.split('\n').length;
        document.getElementById('lc' + boxid).innerHTML = lines;
    } else {
        document.getElementById('lc' + boxid).innerHTML = '0';
    }
}

var numofbxs = 2;
//var pre = '';
//var suf = '';
var delm = '';

function merge() {
    cache_copy();
    pre = document.getElementById('pref').value.replace(/\\x/g, '\n');
    suf = document.getElementById('sufx').value.replace(/\\x/g, '\n');
    var fill = document.getElementById('fill').value.replace(/\\x/g, '\n');
    var joinsets = document.getElementById('joinsets').value.replace(/\\x/g, '\n');
    var out = new Array();
    var longest = 0;
    for (var x = 0; x < numofbxs; x++) {
        var thisboxlen = document.getElementById('input' + x).value.split('\n').length;
        if (thisboxlen > longest)
            longest = thisboxlen;
    }
    var line = '';
    var mergeline = '';
    for (x = 0; x < longest; x++) {
        line = '';
        mergeline = '';
        for (y = 0; y < numofbxs; y++) {
            if (y < (numofbxs - 1))
                delm = document.getElementById('delm' + y).value.replace(/\\x/g, '\n');
            else
                delm = '';
            if (document.getElementById('input' + y).value.split('\n')[x] != undefined)
                line = document.getElementById('input' + y).value.split('\n')[x];
            else
                line = fill;
            mergeline = mergeline + line + delm;
        }
        out[x] = pre + mergeline + suf;
    }
    document.getElementById('input_output').value = out.join(joinsets);
    line_counter();
}

var tabcnt = 4;
var bxcnt = 1;

function addbox() {
    bxcnt++;
    numofbxs++;
    var tdrow = document.getElementById('inpbxs').rows[0];
    var newtd = tdrow.insertCell(tabcnt);
    var tabcont1 = '<div style="margin:0px 6px 0px 6px; text-align:center;">Delimiter<br /><input type="text" id="delm' + (bxcnt - 1) + '" value="" style="width:85px;" /></div>';
    newtd.innerHTML = tabcont1;
    tabcnt++;
    newtd = tdrow.insertCell(tabcnt);
    var tabcont2 = '<div style="text-align:center;"><div style="padding:0px 0px 3px 0px;"><b>Input ' + (bxcnt + 1) + '</b> <input type="button" value="Load File" /><input type="file" id="file' + bxcnt + '" onChange="setTimeout(\'loadfile(\\\'file' + bxcnt + '\\\',\\\'input' + bxcnt + '\\\')\',100);" /></div><textarea id="input' + bxcnt + '" rows="4" style="width:200px;" wrap="off" onkeyup="cntlns(\'input' + bxcnt + '\');" onpaste="setTimeout(\'cntlns(&#092;&#039;' + bxcnt + '&#092;&#039;)\',100);"></textarea><div style="padding:3px 0px 0px 0px;">Line count: <span id="lcinput' + bxcnt + '">0</span></div></div>';
    newtd.innerHTML = tabcont2;
    tabcnt++;
    document.getElementById('inptdiv').scrollLeft = document.getElementById('inptdiv').scrollWidth;
}

// Number Each Line
function num2line(side) {
    cache_copy();
    var text = document.getElementById('input_output').value;
    var prex = document.getElementById('prefix').value;
    var sufx = document.getElementById('suffix').value;
    var sca = document.getElementById('start_count').value * 1;
    var textout = new Array();
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    text = text.replace(/\r/g, '');
    text = text.split('\n');
    var len = text.length;
    var padnum = len;
    var padnum = 0;
    var padnumto = len.toString().length;
    var padnumlen = 0;
    if (side == 'left') {
        if (document.getElementById('pad_num').checked == true) {
            for (var x = 0; x < len; x++) {
                padnum = x + sca;
                padnumlen = padnum.toString().length;
                for (var y = padnumlen; y < padnumto; y++) {
                    padnum = '0' + padnum;
                }
                textout[x] = prex + padnum + sufx + text[x];
            }
        } else {
            for (var x = 0; x < len; x++) {
                textout[x] = prex + (x + sca) + sufx + text[x];
            }
        }
    }
    if (side == 'right') {
        if (document.getElementById('pad_num').checked == true) {
            for (var x = 0; x < len; x++) {
                padnum = x + sca;
                padnumlen = padnum.toString().length;
                for (var y = padnumlen; y < padnumto; y++) {
                    padnum = '0' + padnum;
                }
                textout[x] = text[x] + prex + padnum + sufx;
            }
        } else {
            for (var x = 0; x < len; x++) {
                textout[x] = text[x] + prex + (x + sca) + sufx;
            }
        }
    }
    textout = textout.join('\n');
    document.getElementById('input_output').value = textout;
}

// Permutation Generator
Array.prototype.map = function (fn) {
    var r = [];
    var l = this.length;
    for (i = 0; i < l; i++) {
        r.push(fn(this[i]));
    }
    return r;
}

function permute() {
    cache_copy();
    // Jonas Raoni Soares Silva @ http://jsfromhell.com/array/permute
    var permute = function (v, m) {
        for (var p = -1, j, k, f, r, l = v.length, q = 1, i = l + 1; --i; q *= i)
            ;
        for (x = [new Array(l), new Array(l), new Array(l), new Array(l)], j = q, k = l + 1, i = - 1; ++i < l; x[2][i] = i, x[1][i] = x[0][i] = j /= --k)
            ;
        for (r = new Array(q); ++p < q; )
            for (r[p] = new Array(l), i = - 1; ++i < l; !--x[1][i] && (x[1][i] = x[0][i], x[2][i] = (x[2][i] + 1) % l), r[p][i] = m ? x[3][i] : v[x[3][i]])
                for (x[3][i] = x[2][i], f = 0; !f; f = !f)
                    for (j = i; j; x[3][--j] == x[2][i] && (x[3][i] = x[2][i] = (x[2][i] + 1) % l, f = 1))
                        ;
        return r;
    };
    // end
    var perobjs = new Array();
    perobjscnt = 0;
    var permobj = '';
    for (var x = 0; x < 10; x++) {
        permobj = document.getElementById('permobj' + (x + 1)).value.replace(/\\x/g, '\n');
        if (permobj != '') {
            perobjs[perobjscnt] = permobj;
            perobjscnt++;
        }
    }
    var pre = document.getElementById('setprefix').value.replace(/\\x/g, '\n');
    var suf = document.getElementById('setsuffix').value.replace(/\\x/g, '\n');
    var joinobjs = document.getElementById('objdelimiter').value.replace(/\\x/g, '\n');
    var joinperms = document.getElementById('objjoin').value.replace(/\\x/g, '\n');
    var out = permute(perobjs).map(function (objs) {
        return pre + objs.join(joinobjs) + suf
    });
    out = out.join(joinperms);
    if (document.getElementById('direct_save').checked == true) {
        savefile('yes', 'saveas', out)
    } else {
        document.getElementById('input_output').value = out;
        line_counter();
    }
}

var lastdivnum = 1;

function cnthlite(divnum) {
    var objcnt = 0;
    for (var x = 1; x < 11; x++) {
        if (document.getElementById('permobj' + x).value != '')
            objcnt++;
    }
    if (objcnt != 0) {
        document.getElementById('cnthlite' + objcnt).style.backgroundColor = '#CC0000';
        document.getElementById('cnthlite' + objcnt).style.color = '#FFFFFF';
        document.getElementById('cnthlite' + objcnt).style.fontWeight = 'bold';
    }
    if (objcnt != lastdivnum || objcnt == 0) {
        document.getElementById('cnthlite' + lastdivnum).style.backgroundColor = '#E3E2DF';
        document.getElementById('cnthlite' + lastdivnum).style.color = '#000000';
        document.getElementById('cnthlite' + lastdivnum).style.fontWeight = 'normal';
    }
    if (objcnt == 0)
        lastdivnum = 1;
    else
        lastdivnum = objcnt;
}

// Random Number Generator
function radnum() {
    cache_copy();
    var howmany = document.getElementById('howmany').value * 1;
    var lownum = document.getElementById('lownum').value * 1;
    var lownumminusone = lownum - 1;
    var highnum = document.getElementById('highnum').value * 1;
    var prefix = document.getElementById('prefix').value.replace(/\\x/g, '\n');
    var suffix = document.getElementById('suffix').value.replace(/\\x/g, '\n');
    var outputdelimiter = document.getElementById('outputdelimiter').value.replace(/\\x/g, '\n');
    var output = new Array();
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    var padnumto = highnum.toString().length;
    var padnumlen = 0;
    var radnum = 0;
    radnumlen = 0;
    if (document.getElementById('padnums').checked == true) {
        for (x = 0; x < howmany; x++) {
            radnum = Math.floor((highnum - lownumminusone) * Math.random()) + lownum;
            radnumlen = radnum.toString().length;
            for (var y = radnumlen; y < padnumto; y++) {
                radnum = '0' + radnum;
            }
            output[x] = prefix + radnum + suffix;
        }
    } else {
        for (x = 0; x < howmany; x++) {
            radnum = Math.floor((highnum - lownumminusone) * Math.random()) + lownum;
            output[x] = prefix + radnum + suffix;
        }
    }
    output = output.join(outputdelimiter);
    document.getElementById('input_output').value = output;
    line_counter();
}

// Random String Generator
function radstr() {
    cache_copy();
    var howmany = document.getElementById('howmany').value;
    var input = document.getElementById('input').value;
    input = input.replace(/\r/g, '');
    if (document.getElementById('in_nl').checked == false) {
        var inputdelimiter = document.getElementById('inputdelimiter').value;
        input = input.replace(/\n/g, inputdelimiter);
    }
    if (document.getElementById('in_nl').checked == true)
        inputdelimiter = '\n';
    input_arr = input.split(inputdelimiter);
    input_arr_len = input_arr.length;
    var stringlength = document.getElementById('stringlength').value;
    var output = new Array();
    var output2 = new Array();
    if (document.getElementById('set_nl').checked == false)
        var setdelimiter = document.getElementById('setdelimiter').value;
    else
        setdelimiter = '\n';
    var elementdelimiter = document.getElementById('elementdelimiter').value;
    var prefix = document.getElementById('prefix').value;
    var suffix = document.getElementById('suffix').value;
    for (y = 0; y < howmany; y++) {
        for (x = 0; x < stringlength; x++) {
            output[x] = input_arr[Math.floor(Math.random() * input_arr_len)];
        }
        output2[y] = prefix + output.join(elementdelimiter) + suffix;
    }
    output2 = output2.join(setdelimiter);
    document.getElementById('input_output').value = output2;
    line_counter();
}

// Remove Duplicate Lines
function rduplin() {
    cache_copy();
    var text = document.getElementById('input_output').value.replace(/\r/g, '');
    var textinarr = text.split('\n');
    var len = textinarr.length;
    var textoutarr = new Array();
    var textoutarrcnt = 0;
    var cachearr = new Array();
    var cachecnt = 0;
    var hash = {};
    var xkey = '';
    var hkey = '';
    var cs = document.getElementById('case_sen').checked;
    var rel = document.getElementById('rel').checked;
    var dis = document.getElementById('dis_rem').checked;
    //ttt
    if (cs == true && rel == true && dis == true) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey;
            if (hash[hkey] == null && xkey != '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                if (xkey == '')
                    cachearr[cachecnt] = '( ' + (x + 1) + ' empty ): ';
                else
                    cachearr[cachecnt] = '( ' + (x + 1) + ' dupe of ' + hash[hkey] + ' ): ' + xkey;
                cachecnt++;
            }
        }
    }
    //ttf
    if (cs == true && rel == true && dis == false) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey;
            if (hash[hkey] == null && xkey != '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                cachecnt++;
            }
        }
    }
    //tft
    if (cs == true && rel == false && dis == true) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey;
            if (hash[hkey] == null || xkey == '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                cachearr[cachecnt] = '( ' + (x + 1) + ' dupe of ' + hash[hkey] + ' ): ' + xkey;
                cachecnt++;
            }
        }
    }
    //tff
    if (cs == true && rel == false && dis == false) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey;
            if (hash[hkey] == null || xkey == '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                cachecnt++;
            }
        }
    }
    //ftt
    if (cs == false && rel == true && dis == true) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey.toUpperCase();
            if (hash[hkey] == null && xkey != '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                if (xkey == '')
                    cachearr[cachecnt] = '( ' + (x + 1) + ' empty ): ';
                else
                    cachearr[cachecnt] = '( ' + (x + 1) + ' dupe of ' + hash[hkey] + ' ): ' + xkey;
                cachecnt++;
            }
        }
    }
    //ftf
    if (cs == false && rel == true && dis == false) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey.toUpperCase();
            if (hash[hkey] == null && xkey != '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                cachecnt++;
            }
        }
    }
    //fft
    if (cs == false && rel == false && dis == true) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey.toUpperCase();
            if (hash[hkey] == null || xkey == '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                cachearr[cachecnt] = '( ' + (x + 1) + ' dupe of ' + hash[hkey] + ' ): ' + xkey;
                cachecnt++;
            }
        }
    }
    //fff
    if (cs == false && rel == false && dis == false) {
        for (var x = 0; x < len; x++) {
            xkey = textinarr[x];
            hkey = ' ' + xkey.toUpperCase();
            if (hash[hkey] == null || xkey == '') {
                hash[hkey] = x + 1;
                textoutarr[textoutarrcnt] = xkey;
                textoutarrcnt++;
            } else {
                cachecnt++;
            }
        }
    }
    document.getElementById('input_output').value = textoutarr.join('\n');
    if (dis == true)
        document.getElementById('removed_output').value = cachearr.join('\n');
    var lines = 'lines';
    if (cachecnt == 1)
        lines = 'line';
    document.getElementById('removed').innerHTML = cachecnt + ' ' + lines + ' removed.';
    line_counter();
}

// Remove Empty Lines
function rel() {
    cache_copy();
    var filecontarr = document.getElementById('input_output').value.replace(/\r/g, '').split('\n');
    var filecontarrcnt = filecontarr.length;
    var newfilecontarr = new Array();
    var newfilecontarrcnt = 0;
    if (document.getElementById('rwhitespace').checked == true) {
        var testx = new RegExp(/\S/)
        for (var x = 0; x < filecontarrcnt; x++) {
            if (testx.test(filecontarr[x]) == true) {
                newfilecontarr[newfilecontarrcnt] = filecontarr[x];
                newfilecontarrcnt++;
            }
        }
    } else {
        for (var x = 0; x < filecontarrcnt; x++) {
            if (filecontarr[x] != '') {
                newfilecontarr[newfilecontarrcnt] = filecontarr[x];
                newfilecontarrcnt++;
            }
        }
    }
    document.getElementById('input_output').value = newfilecontarr.join('\n');
    document.getElementById('removed').innerHTML = (filecontarrcnt - newfilecontarrcnt) + ' empty lines removed. ';
    line_counter();
}

// Remove Letter Accents
var sec = ['193', '225', '192', '224', '194', '226', '461', '462', '258', '259', '195', '227', '7842', '7843', '7840', '7841', '196', '228', '197', '229', '256', '257', '260', '261', '7844', '7845', '7846', '7847', '7850', '7851', '7848', '7849', '7852', '7853', '7854', '7855', '7856', '7857', '7860', '7861', '7858', '7859', '7862', '7863', '506', '507', '262', '263', '264', '265', '268', '269', '266', '267', '199', '231', '270', '271', '272', '273', '201', '233', '200', '232', '202', '234', '282', '283', '276', '277', '7868', '7869', '7866', '7867', '278', '279', '203', '235', '274', '275', '280', '281', '7870', '7871', '7872', '7873', '7876', '7877', '7874', '7875', '7864', '7865', '7878', '7879', '286', '287', '284', '285', '288', '289', '290', '291', '292', '293', '294', '295', '205', '237', '204', '236', '300', '301', '206', '238', '463', '464', '207', '239', '296', '297', '302', '303', '298', '299', '7880', '7881', '7882', '7883', '308', '309', '310', '311', '313', '314', '317', '318', '315', '316', '321', '322', '319', '320', '323', '324', '327', '328', '209', '241', '325', '326', '211', '243', '210', '242', '334', '335', '212', '244', '7888', '7889', '7890', '7891', '7894', '7895', '7892', '7893', '465', '466', '214', '246', '336', '337', '213', '245', '216', '248', '510', '511', '332', '333', '7886', '7887', '416', '417', '7898', '7899', '7900', '7901', '7904', '7905', '7902', '7903', '7906', '7907', '7884', '7885', '7896', '7897', '7764', '7765', '7766', '7767', '340', '341', '344', '345', '342', '343', '346', '347', '348', '349', '352', '353', '350', '351', '356', '357', '354', '355', '358', '359', '218', '250', '217', '249', '364', '365', '219', '251', '467', '468', '366', '367', '220', '252', '471', '472', '475', '476', '473', '474', '469', '470', '368', '369', '360', '361', '370', '371', '362', '363', '7910', '7911', '431', '432', '7912', '7913', '7914', '7915', '7918', '7919', '7916', '7917', '7920', '7921', '7908', '7909', '7810', '7811', '7808', '7809', '372', '373', '7812', '7813', '221', '253', '7922', '7923', '374', '375', '376', '255', '7928', '7929', '7926', '7927', '7924', '7925', '377', '378', '381', '382', '379', '380', '208'];
var rep = ['A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'A', 'a', 'C', 'c', 'C', 'c', 'C', 'c', 'C', 'c', 'C', 'c', 'D', 'd', 'D', 'd', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H', 'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'L', 'l', 'L', 'l', 'L', 'l', 'L', 'l', 'N', 'n', 'N', 'n', 'N', 'n', 'N', 'n', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'P', 'p', 'P', 'p', 'R', 'r', 'R', 'r', 'R', 'r', 'S', 's', 'S', 's', 'S', 's', 'S', 's', 'T', 't', 'T', 't', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'W', 'w', 'W', 'w', 'W', 'w', 'W', 'w', 'Y', 'y', 'Y', 'y', 'Y', 'y', 'Y', 'y', 'Y', 'y', 'Y', 'y', 'Y', 'y', 'Z', 'z', 'Z', 'z', 'Z', 'z', 'D'];

function remacc() {
    cache_copy();
    var seclen = sec.length;
    var repwith = -1;
    var remcnt = 0;
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/g, '').split('\n');
    var textout = new Array();
    var linecnt = text.length;
    var toremout = '';
    var chcoat = '';
    for (var x = 0; x < linecnt; x++) {
        torem = text[x].split('');
        toremout = new Array();
        toremlen = torem.length;
        for (var y = 0; y < toremlen; y++) {
            chcoat = torem[y].charCodeAt(0);
            if (chcoat > 124) {
                for (var z = 0; z < seclen; z++) {
                    if (chcoat == sec[z]) {
                        repwith = rep[z];
                        remcnt++;
                        z = seclen;
                    }
                }
            }
            if (repwith != -1) {
                toremout[y] = repwith;
                repwith = -1;
            } else
                toremout[y] = torem[y];
        }
        textout[x] = toremout.join('');
    }
    textout = textout.join('\n');
    document.getElementById('input_output').value = textout;
    document.getElementById('removed').innerHTML = remcnt + ' letter accents removed.';
}

// Remove Line Containing
var fieldnum = 0;
var fieldtype = '';
var cacherem = 'no';
var enableregex = 'no';

function makeregexp() {
    var regexpoutarr = new Array();
    for (var x = 0; x < (fieldnum + 1); x++) {
        regexpoutarr[x] = document.getElementById('addfield' + x).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    }
    var regexpout = '';
    if (fieldtype == 'AND')
        regexpout = '((?=.*' + regexpoutarr.join(')(?=.*') + ').*)';
    if (fieldtype == 'OR')
        regexpout = '(' + regexpoutarr.join('|') + ')';
    if (fieldtype == '')
        regexpout = document.getElementById('addfield0').value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    return regexpout;
}

function removelines(whatlines) {
    cache_copy();
    var textin = document.getElementById('input_output').value.replace(/\r/g, '');
    var toremove = makeregexp();
    var textinarr = textin.split('\n');
    var textinarrcnt = textinarr.length;
    var textoutarr = new Array();
    var textoutarrcnt = 0;
    var linesremovedcnt = 0;
    var casen = 'i';
    if (document.getElementById('case_sen').checked == true)
        casen = '';
    if (enableregex == 'yes')
        toremove = document.getElementById('addfield0').value;
    else
        toremove = makeregexp();
    var killfun = 'no';
    try {
        var toremoveregx = new RegExp(toremove, casen);
    } catch (err) {
        alert('Something is incorrect (' + err + ') within your regular expression.\nBe sure special characters .*+?^=!:${}()|\\ used as literals have been escaped with a backslash.');
        killfun = 'yes';
    }
    if (killfun == 'no') {
        if (whatlines == 'containing' && cacherem == 'no') {
            for (var x = 0; x < textinarrcnt; x++) {
                if (toremoveregx.test(textinarr[x]) == false) {
                    textoutarr[textoutarrcnt] = textinarr[x];
                    textoutarrcnt++;
                } else
                    linesremovedcnt++;
            }
        }
        if (whatlines == 'notcontaining' && cacherem == 'no') {
            for (var x = 0; x < textinarrcnt; x++) {
                if (toremoveregx.test(textinarr[x]) == true) {
                    textoutarr[textoutarrcnt] = textinarr[x];
                    textoutarrcnt++;
                } else
                    linesremovedcnt++;
            }
        }
        var removedcachearr = new Array();
        if (whatlines == 'containing' && cacherem == 'yes') {
            for (var x = 0; x < textinarrcnt; x++) {
                if (toremoveregx.test(textinarr[x]) == false) {
                    textoutarr[textoutarrcnt] = textinarr[x];
                    textoutarrcnt++;
                } else {
                    removedcachearr[linesremovedcnt] = textinarr[x];
                    linesremovedcnt++;
                }
            }
        }
        if (whatlines == 'notcontaining' && cacherem == 'yes') {
            for (var x = 0; x < textinarrcnt; x++) {
                if (toremoveregx.test(textinarr[x]) == true) {
                    textoutarr[textoutarrcnt] = textinarr[x];
                    textoutarrcnt++;
                } else {
                    removedcachearr[linesremovedcnt] = textinarr[x];
                    linesremovedcnt++;
                }
            }
        }
        var textout = textoutarr.join('\n');
        document.getElementById('input_output').value = textout;
        if (cacherem == 'yes') {
            var removedcache = removedcachearr.join('\n');
            document.getElementById('removed_box').value = removedcache;
        }
        document.getElementById('removed').innerHTML = '' + linesremovedcnt + ' removed / ' + textoutarrcnt + ' remain.';
        line_counter();
    }
}

function addfield(field) {
    if (field == 'reset') {
        document.getElementById('inputfields').innerHTML = '<input type="text" id="addfield0" value="" style="width:100%;" />'
        document.getElementById('andbttn').style.display = 'inline-block';
        document.getElementById('orbttn').style.display = 'inline-block';
        fieldnum = 0;
        fieldtype = '';
    } else {
        fieldnum++;
        if (fieldnum == 1) {
            if (field == 'andfield') {
                document.getElementById('orbttn').style.display = 'none';
                fieldtype = 'AND';
            } else {
                fieldtype = 'OR';
                document.getElementById('andbttn').style.display = 'none';
            }
        }
        var newfield = fieldtype + '<input type="text" id="addfield' + fieldnum + '" value="" style="width:100%;" />';
        var newdiv = document.createElement('div');
        newdiv.innerHTML = newfield;
        document.getElementById('inputfields').appendChild(newdiv);
    }
}

function disrem() {
    var chkedstate = document.getElementById('dremoved').checked;
    if (chkedstate == true) {
        document.getElementById('removed_box').style.display = 'inline-block';
        cacherem = 'yes';
    } else {
        cacherem = 'no';
        document.getElementById('removed_box').value = '';
        document.getElementById('removed_box').style.display = 'none';
    }
}

function selectele(eleid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(eleid));
        range.select();
    } else {
        var range = document.createRange();
        range.selectNode(document.getElementById(eleid));
        window.getSelection().addRange(range);
    }
}

function rlc_regexsrch() {
    var chkedstate = document.getElementById('regex_srch').checked;
    if (chkedstate == true) {
        addfield('reset');
        enableregex = 'yes';
        document.getElementById('addfielddiv').innerHTML =
                '<div style="padding:3px 0px 3px 0px;"><input type="checkbox" id="regex_srch" onclick="rlc_regexsrch();" CHECKED />Enable regular expression search. ' +
                'Use <span id="catordog" style="color:#990000;" onclick="selectele(this.id)">(cat|dog|bird)</span> for cat OR dog OR bird. Use <span id="catanddog" style="color:#990000;" onclick="selectele(this.id)">((?=.*cat)(?=.*dog)(?=.*bird).*)</span> for cat AND dog AND bird. ' +
                'Remember to escape special characters .*+?^=!:${}()|\\ with a backslash when used as literals within a regular expression. ' +
                'Learn more about regular expressions visit <a rel="nofollow" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" style="color:#0000FF;">developer.mozilla.org</a>.</div>';
    } else {
        document.getElementById('addfield0').value = '';
        enableregex = 'no';
        document.getElementById('addfielddiv').innerHTML =
                'Add <input type="button" id="andbttn" value="AND" onClick="addfield(\'andfield\');" /> ' +
                '<input type="button" id="orbttn" value="OR" onClick="addfield(\'orfield\');" /> search field. ' +
                '<input type="button" value="Reset" onClick="addfield(\'reset\');" /> &nbsp;' +
                '<input type="checkbox" id="regex_srch" onclick="rlc_regexsrch();" />Enable regular expression search.';
    }
}

// Remove Unwanted Spaces
function remes() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    var remcntb = text.length;
    var textarr = text.split('\n');
    var textarrlen = textarr.length;
    var be_long = 'p_bclevtug g_rkgzrpunavp.p_bz';
    var rfun = /\s+/g;
    var rfun2 = '';
    if (document.getElementById('ltspc').checked == true)
        rfun2 = /^\s+|\s+$/g;
    var repw = ' ';
    if (document.getElementById('remall').checked == true)
        repw = '';
    var repw2 = '';
    for (x = 0; x < textarrlen; x++) {
        textarr[x] = textarr[x].replace(rfun, repw).replace(rfun2, repw2);
    }
    text = textarr.join('\n');
    var remcnta = text.length;
    var remcnt = remcntb - remcnta;
    document.getElementById('input_output').value = text;
    document.getElementById('removed').innerHTML = remcnt + ' spaces removed.';
    line_counter();
}

// Reverse Flip Upsidedown
String.prototype.swapcase = function () {
    var toswap = this;
    var toswaplen = toswap.length;
    var uplet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lolet = 'abcdefghijklmnopqrstuvwxyz';
    word = toswap.split('');
    wordlen = word.length;
    var first = word[0];
    var last = word[wordlen - 1];
    if (uplet.indexOf(first) == -1)
        upperc = 0;
    else
        upperc = 1;
    if (lolet.indexOf(last) == -1)
        lowerc = 0;
    else
        lowerc = 1;
    if (upperc + lowerc == 2) {
        toswap = toswap.split('');
        toswap = toswap.slice(1, toswaplen - 1);
        toswap.unshift(first.toLowerCase());
        toswap.push(last.toUpperCase());
        toswap = toswap.join('');
        return toswap;
    } else
        return toswap;
}

function reversetext() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    text = text.replace(/([^a-z 0-9])/gi, ' $1 ');
    text = text.split('').reverse().join('');
    text = text.replace(/ ([^a-z 0-9]) /gi, '$1');
    document.getElementById('input_output').value = text;
}

function fliptext() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    text = text.replace(/([^a-z 0-9\n])/gi, ' $1 ');
    text = text.split('\n').reverse().join('\n');
    text = text.split('').reverse().join('');
    text = text.replace(/ ([^a-z 0-9\n]) /gi, '$1');
    document.getElementById('input_output').value = text;
}

function reversewords() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    text = text.replace(/([^a-z 0-9])/gi, ' $1 ');
    text = text.replace(/\n/g, ' \n ').split(' ').reverse().join(' ').replace(/ \n /g, '\n');
    text = text.replace(/ ([^a-z 0-9]) /gi, '$1');
    document.getElementById('input_output').value = text;
}

function flipwords() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    text = text.replace(/([^a-z 0-9\n])/gi, ' $1 ');
    text = text.split('\n').reverse().join('\n');
    text = text.replace(/\n/g, ' \n ').split(' ').reverse().join(' ').replace(/ \n /g, '\n');
    text = text.replace(/ ([^a-z 0-9\n]) /gi, '$1');
    document.getElementById('input_output').value = text;
}

function reversewordletters() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    text = text.replace(/\r/gi, '');
    text = text.replace(/([^a-z 0-9])/gi, ' $1 ');
    text = text.split(' ');
    var len = text.length;
    var textarr = new Array();
    for (var x = 0; x < len; x++) {
        var text2 = text[x].swapcase();
        text2 = text2.split('').reverse().join('');
        textarr[x] = text2;
    }
    text = textarr.join(' ');
    text = text.replace(/ ([^a-z 0-9]) /gi, '$1');
    document.getElementById('input_output').value = text;
}

function flipString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = flipTable[c]
        result[last - i] = r != undefined ? r : c
    }
    return result.join('')
}
var flipTable = {
    a: '\u0250',
    b: 'q',
    c: '\u0254',
    d: 'p',
    e: '\u01DD',
    f: '\u025F',
    g: '\u0183',
    h: '\u0265',
    i: '\u0131',
    j: '\u027E',
    k: '\u029E',
    l: '\u05DF',
    m: '\u026F',
    n: 'u',
    r: '\u0279',
    t: '\u0287',
    v: '\u028C',
    w: '\u028D',
    y: '\u028E',
    '.': '\u02D9',
    '[': ']',
    '(': ')',
    '{': '}',
    '?': '\u00BF',
    '!': '\u00A1',
    "\'": ',',
    '<': '>',
    '_': '\u203E',
    '"': '\u201E',
    '\\': '\\',
    ';': '\u061B',
    '\u203F': '\u2040',
    '\u2045': '\u2046',
    '\u2234': '\u2235'}
for (i in flipTable) {
    flipTable[flipTable[i]] = i;
}

function flipupsidedown() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/gi, '');
    text = flipString(text.toLowerCase());
    document.getElementById('input_output').value = text;
}

// ROT13 Caesar Cipher
var rot13_key = 'nopqrstuvwxyzabcdefghijklm';

function encodedecodetext() {
    cache_copy();
    var textin = document.getElementById('input_output').value.replace(/\r/gi, '');
    subkey = rot13_key.split('');
    var ckey = 'VGV4dE1lY2hhbmlj';
    var rotkey = 'grkggbbyoybtfcbgpbz';
    textin = textin.split('\n');
    var letters = '';
    var lettersout = new Array();
    var textout = new Array();
    for (x = 0; x < textin.length; x++) {
        letters = textin[x].split('');
        for (y = 0; y < letters.length; y++) {
            if (letters[y].toLowerCase().match(/[a-z]/)) {
                if (letters[y].match(/[a-z]/))
                    lettersout[y] = subkey[letters[y].charCodeAt(0) - 97];
                else
                    lettersout[y] = subkey[letters[y].charCodeAt(0) - 65].toUpperCase();
            } else
                lettersout[y] = letters[y];
        }
        textout[x] = lettersout.join('');
        lettersout = new Array();
    }
    textout = textout.join('\n');
    document.getElementById('input_output').value = textout;
}

// Scramble Descramble Words
var wordlist = 'aaron;abandon;abide;abilities;ability;able;abnormal;aboard;about;above;absence;absent;absolute;absolutely;absorb;abstract;abundant;academic;academy;accelerate;accept;acceptable;acceptance;accepted;access;accesses;accident;accompanied;accompany;accomplish;accord;accordance;according;accordingly;account;accumulate;accuracy;accurate;accurately;accuse;accused;accustom;achieve;achievement;acid;acknowledge;acknowledged;acquire;acquired;acres;across;act;acted;acting;action;actions;activate;active;actively;activities;activity;actor;actors;actress;actual;actually;adam;adams;adapt;add;adding;addition;additional;address;adequate;adhere;adjacent;adjective;adjust;adjusted;administer;administration;administrative;administrator;admire;admission;admit;admitted;admitting;adolescent;adopt;adopted;adoption;adult;adults;advance;advanced;advancement;advantage;adventure;adverse;advertise;advertisement;advertisers;advertising;advice;advise;advised;advisory;advocate;aesthetic;affair;affairs;affect;affecting;affiliate;affluence;afford;afraid;africa;african;after;afternoon;again;against;age;agencies;agency;agenda;agent;aggregate;aggression;agitate;ago;agree;agreed;agreement;agricultural;agriculture;ah;ahead;aid;aim;aimed;ain;air;airplane;airplanes;airport;alan;alarm;alarming;alaska;albert;alcohol;ale;alert;alexander;alice;alienation;alight;align;alignment;alike;alive;all;allege;alliance;allied;allies;allocate;allotment;allow;allowance;allowances;allowed;allowing;allows;allude;ally;almost;alone;along;aloud;alphabet;already;also;altered;alternative;although;altogether;always;am;amanda;amateur;amaze;amazing;amber;ambiguity;ambiguous;ambition;ambitious;amendment;america;american;americans;amid;among;amongst;amorphous;amount;amounts;amuse;amusement;amy;an;analogy;analyse;analysis;analytical;analyze;ancient;and;andrea;andrew;angela;angeles;angle;angles;angry;angular;animal;animals;animated;ankle;ann;anna;anniversary;announce;announced;announcement;annoy;annoyance;annual;annul;anomaly;anonymous;another;answer;answered;answers;ant;anthony;anti;anticipate;anticipated;anticipation;ants;anxiety;anxious;any;anybody;anyhow;anymore;anyone;anyplace;anything;anytime;anyways;anywhere;apart;apartment;apologise;apologize;apology;apparatus;apparent;apparently;appeal;appealing;appeals;appear;appearance;appearances;appeared;appears;append;appendix;applaud;applause;apple;apples;application;applied;apply;applying;appoint;appointment;appraise;appreciate;appreciation;approach;approached;appropriate;approval;approve;approximate;approximately;april;arbitrary;arbitrate;arbitration;arch;architect;are;area;areas;aren;arent;argentina;argue;arguing;argument;arise;aristocrat;arithmetic;arive;arizona;arkansas;arm;arms;army;around;arouse;arrange;arranged;arrangement;arrest;arrested;arrival;arrive;arrived;arrow;arrows;art;arthur;article;articles;artificial;artist;artistic;artists;as;ascent;ascertain;ascribe;ashamed;ashley;asia;aside;ask;asked;asking;asleep;aspect;aspects;aspiration;ass;assemble;assembled;assembly;assent;assertive;assess;assessment;assessors;assign;assigned;assignment;assignments;assimilate;assist;assistance;assistant;associate;associated;association;associations;assume;assumed;assumption;assumptions;assure;assured;astonish;astronomy;at;ate;atlantic;atmosphere;atom;atomic;atoms;attach;attached;attack;attain;attempt;attempted;attempting;attempts;attend;attention;attentive;attitude;attorney;attract;attraction;attractive;attribute;attributes;audible;audience;audio;audited;august;aunt;austin;australia;authentic;author;authorities;authority;authorize;authorized;authors;auto;automatic;automatically;automobile;automobiles;autumn;avail;availability;avenue;average;averse;avoid;avoidance;avoided;awake;award;awards;aware;awareness;away;awe;awfully;awkward;awkwardly;awoke;awoken;axe;axis;babies;baby;back;background;backup;backward;backwards;bad;badly;bag;baggage;bags;bake;bakers;balance;balanced;ball;ballet;balloon;balls;ban;band;bang;bank;bankrupt;banks;bar;barbara;barber;bare;barely;bargain;bargains;bark;barn;barrel;barrier;bars;base;baseball;based;basement;bases;basic;basically;basin;basis;basket;bat;bath;bathe;bathroom;batteries;battery;battle;battled;bay;be;beach;bead;beam;bean;beans;bear;bearing;bears;beast;beasts;beat;beaten;beautiful;beauty;became;because;become;becomes;becoming;bed;bedroom;bedtime;bee;beef;been;beer;bees;before;beg;began;begin;beginning;begins;begun;behalf;behave;behavior;behaviour;behind;behold;being;belief;believe;believed;believes;bell;bells;belly;belong;belonged;belongs;below;belt;bench;bend;beneath;benefit;benefits;benjamin;bent;berry;beset;beside;besides;best;bet;better;betty;between;beverly;beyond;bible;bicycle;bid;big;bigger;biggest;bill;billion;bills;billy;bind;binding;biological;biology;bird;birds;birth;birthday;bit;bite;bits;bitten;bitter;black;blade;blame;blank;blanket;bleach;bleed;blemish;blend;bless;blew;blind;blink;block;blockage;blocks;blog;blond;blonde;blood;blot;blow;blowing;blown;blue;blunt;blush;board;boards;boardwalk;boast;boat;boating;bob;bobby;bodies;body;boil;bold;boldly;bolt;bomb;bombs;bond;bonds;bone;bones;book;books;boot;boots;border;bore;boring;born;borrow;borrowed;boss;boston;both;bother;bottle;bottom;bought;bounce;bound;boundary;bounds;bow;bowl;box;boxes;boy;boyfriend;boys;brain;brainstorm;brake;brakes;branch;branches;brand;brandon;brass;brave;bravery;brazil;breach;bread;breadth;break;breakfast;breaking;breaks;breakup;breath;breathe;breathing;breed;breeds;breeze;brenda;brian;bribe;bribery;brick;bride;bridge;bridges;brief;briefly;bright;brighten;brilliant;bring;bringing;brings;britain;british;brittany;broad;broadcast;broadway;broke;broken;broker;brother;brothers;brought;brown;browser;bruce;bruise;brush;brushed;bryan;bubble;bucket;budget;buffalo;buffer;bug;bugs;build;builder;builders;building;buildings;builds;built;bulk;bullet;bulletin;bullets;bump;bunch;bundle;bureau;bureaucracy;buried;burn;burned;burning;burns;burnt;burst;bury;bus;bush;business;businesses;businesslike;businessman;bust;busy;but;butter;button;buy;buying;buzz;by;bygone;bypass;cabin;cady;cage;cake;calculate;calculated;calculation;calculator;calendar;california;call;called;calling;calls;calm;came;camera;camp;campaign;campus;can;canal;cancel;cancer;candidate;candy;cannot;cant;cap;capabilities;capable;cape;capital;capitol;captain;caption;capture;captured;car;carbon;card;cards;care;career;careers;careful;carefully;careless;carelessly;carl;carleton;carol;carolina;carolyn;carriage;carried;carries;carry;carrying;cars;cart;carve;case;cases;casey;cash;cast;castle;casual;cat;catalog;catalogue;catastrophic;catch;categories;category;catherine;catholic;cattle;caught;cause;caused;causes;caution;cautious;cavalry;cave;cease;ceiling;celebrate;celebrities;cell;cellphone;cells;cement;cent;center;centers;central;cents;centuries;century;ceremony;certain;certainly;certainty;chain;chair;chairman;chairs;chalk;challenge;challenged;challenges;chamber;champion;champions;championship;championships;chance;chances;change;changed;changes;changing;channel;channels;chapel;chapter;character;characteristic;characteristics;characterized;characters;charge;charged;charges;charles;charlie;charming;chart;charter;chase;cheap;cheat;check;checked;cheek;cheer;cheese;chemical;cheryl;chest;chew;chicago;chicken;chickens;chief;chiefly;child;childhood;children;chile;chimney;china;chinese;choice;choke;cholesterol;choose;choosing;chop;chose;chosen;christian;christina;christine;christmas;christopher;church;churches;cigarette;circle;circles;circuit;circular;circulate;circumstance;circumstances;circus;cited;cities;citizen;citizens;city;civic;civil;civilian;civilization;civilize;claim;claims;clap;clarify;clarity;class;classes;classic;classical;classification;classify;classroom;claws;clay;clean;cleaning;clear;cleared;clearer;clearing;clearly;clerk;clever;click;clicking;client;cliff;climate;climb;climbed;climbing;cling;clinic;clinical;clip;clock;close;closed;closely;closer;closing;cloth;clothe;clothes;clothing;cloud;clouds;cloudy;club;clubs;clues;co;coach;coal;coarse;coarses;coast;coat;cocktail;code;coded;codes;coefficient;coffee;cogent;coil;coin;coincide;coins;cold;collapse;collapsed;collar;colleague;colleagues;collect;collected;collection;collections;collective;collector;collectors;college;colleges;collide;collison;colombia;colonel;colonial;colonies;colony;color;colorado;colored;colorful;colors;colour;column;columns;comb;combat;combination;combine;combined;combustion;come;comedy;comes;comfort;comfortable;coming;command;commander;commands;comment;comments;commerce;commercial;commission;commissioner;commit;committed;committee;commodities;commodity;common;commonly;commons;commune;communicate;communication;communications;communist;communities;community;companies;companion;companionship;company;comparable;compare;compared;comparison;compass;compatible;compel;compensate;compete;competence;competent;competition;competitive;competitor;competitors;compile;complain;complained;complaining;complaint;complaints;complement;complete;completed;completely;completion;complex;complicate;complicated;complication;comply;component;components;compose;composed;composition;compound;compounds;comprehend;comprise;compromise;compulsion;compulsory;compute;computed;computer;computers;computing;conceal;concede;conceive;conceived;concentrate;concentration;concentric;concept;conception;concepts;concern;concerned;concerning;concerns;concert;concerts;conclude;concluded;conclusion;conclusions;concrete;condemned;condense;condition;conditioned;conditions;conduct;conducted;conducting;conductor;confer;conference;conferences;confess;confession;confidence;confident;confidential;configuration;confine;confirmation;confirmed;conflict;conform;confront;confronted;confuse;confusion;congratulate;congratulation;congregation;congress;congressman;connect;connected;connecticut;connection;conquer;conqueror;conquest;conscience;conscious;consciousness;consent;consequence;consequences;consequent;consequently;conservative;conserve;consider;considerable;considerably;consideration;considerations;considered;considering;consist;consisted;consistent;consistently;consisting;consists;console;consolidate;consonant;conspicuous;conspiracy;constant;constantly;constitute;constitution;constitutional;construct;constructed;construction;consult;consume;consumer;consumers;contact;contacts;contain;contained;containing;contains;contaminate;contemporary;contend;content;contents;contest;context;continent;continental;contingent;continually;continue;continued;continues;continuing;continuity;continuous;continuously;contract;contracted;contracts;contradict;contrary;contrast;contribute;contributed;contribution;contributions;control;controlled;controlling;controls;controversial;controversy;convene;convenience;convenient;conveniently;convention;conventional;converge;conversation;conversion;convert;converted;conviction;convictions;convince;convinced;convincing;cook;cookies;cooking;cool;cooling;cooperate;cooperation;cooperative;coordinate;cope;copied;copier;copies;copper;copy;copying;cord;core;corn;corner;corners;corporate;corporation;corporations;corps;correct;correction;correctly;correlate;correspond;correspondence;corresponding;corridor;corrode;cost;costs;cottage;cotton;couch;cough;could;couldn;couldnt;council;counsel;count;counted;counter;counties;counting;countries;country;county;couple;courage;course;court;courts;cousin;cover;coverage;covered;covering;covers;cow;coward;cowardly;cowboy;cowboys;cows;crack;craft;craig;crash;crashed;crawl;crawled;crazed;cream;create;created;creates;creating;creative;creature;creatures;credible;creek;creep;crew;cried;crime;criminal;criminals;crises;crisis;criterion;critic;critical;critically;criticism;critics;critique;crop;cross;crossed;crossing;crossword;crowd;crowded;crown;crucial;cruel;crush;cry;crying;crystal;cuba;cube;cultivate;cultivation;cultivator;cultural;culture;cultured;cultures;cumbersome;cup;cupcake;cure;curiosity;curious;curl;currency;current;currently;currents;curse;cursed;curtain;curve;curved;cushion;custom;customary;customer;customers;customize;customs;cut;cuts;cutting;cycle;cylinder;cynthia;dad;daily;dakota;dam;damage;damn;damp;dance;dancer;dancers;dances;dancing;danger;dangerous;daniel;danielle;dare;daredevil;dark;darken;darkness;dart;dash;data;date;dates;daughter;david;dawn;day;daydream;daylight;days;de;dead;deafen;deal;deals;dealt;dean;dear;death;debate;deborah;debra;debt;decades;decay;deceit;deceive;december;decent;decide;decided;decidedly;decision;decisions;decisive;deck;declaration;declare;declared;decline;decorate;decrease;decreasing;dedicate;dedicated;dedication;deduct;deem;deep;deepen;deeper;deeply;deer;default;defeat;defeats;defect;defence;defend;defendant;defense;defer;deficient;define;defined;definite;definitely;definition;definitions;defintion;deflect;degenerate;degrade;degree;degrees;delaware;delay;delegate;delete;deliberate;deliberately;delicate;delight;delighted;delightful;deliver;delivery;demand;demanded;democracy;democratic;democrats;demonstrate;demonstrated;demonstration;denise;denmark;dennis;denote;density;deny;department;departments;depend;dependence;dependent;depending;depends;depress;depressed;depression;deprive;depth;derive;derived;descend;descendant;descent;describe;described;describes;description;desegregation;desert;deserve;design;designed;designs;desirable;desire;desired;desires;desk;desks;desperate;desperately;despite;destiny;destroy;destroyed;destruction;destructive;detail;detailed;details;detained;detect;detective;detergent;determination;determine;determined;determines;determining;detriment;develop;developed;developers;developing;development;developments;deviate;device;devices;devise;devote;devoted;diagnose;diagram;diameter;diamond;diana;diane;dictate;dictionary;did;didn;didnt;die;died;diet;differ;difference;differences;different;difficult;difficulties;difficulty;diffuse;diffusion;dig;digest;digestion;digit;digital;dignity;dilemma;dilute;dimension;dimensions;dine;diner;diners;dining;dinner;dip;diplomatic;direct;directed;direction;directions;directly;director;directors;directory;dirt;dirty;disadvantage;disagree;disappear;disappearance;disappeared;disappoint;disappointed;disappointment;disapprove;disarm;disaster;discern;discharge;discipline;disciplines;discomfort;discontent;discount;discourse;discover;discovered;discovery;discrete;discrimination;discuss;discussed;discusses;discussion;discussions;disease;disemvowel;disgust;dish;dishes;dislike;dismember;dismiss;disorganized;dispense;disperse;displace;displacement;display;displayed;displays;disposal;dispose;disprove;dispute;disregard;disrespect;dissatisfaction;dissatisfy;dissect;dissipate;dissolve;distance;distances;distant;distinct;distinction;distinctive;distinguish;distinguished;distort;distribute;distributed;distribution;district;districts;disturb;disturbed;disturbing;ditch;dive;diverge;diverse;divert;divide;divided;dividend;divine;division;divorce;do;doc;doctor;doctors;doctrine;document;documents;does;doesn;doesnt;dog;doghouse;dogs;doing;doll;dollar;dollars;domain;domestic;dominant;dominate;dominated;donald;done;donkey;donna;dont;door;doors;doris;dorothy;dot;dots;double;doubt;doubtful;douglas;down;downhill;download;downtown;dozen;dr;draft;drag;drain;drama;dramatic;dramatically;dramatize;drank;drastic;draw;drawer;drawing;drawings;drawn;dream;dreamed;dreams;dreamt;dress;dressed;dressing;drew;dried;drill;drink;drinking;drinks;drip;drive;driven;driver;drivers;driveway;driving;drop;dropped;drops;drove;drown;drug;drugs;drum;drunk;dry;drying;duck;ducks;due;dug;dull;durable;duration;during;dust;dutch;duties;duty;dvd;dwell;dying;dylan;dynamic;dysfunctional;each;eager;ear;earlier;earliest;early;earn;earnings;ears;earth;ease;easier;easily;east;easy;eat;eaten;eating;ebay;economic;economical;economy;edges;edible;edit;edited;edition;editor;editorial;editors;educate;educated;educates;education;educational;educator;edward;effect;effective;effectively;effectiveness;effects;efficiency;efficient;effort;efforts;egg;eggs;egypt;eight;eighteen;eighteenth;eighty;either;elaborate;elastic;elder;elderly;elect;elected;electing;election;electric;electrical;electrician;electricity;electronic;electronics;element;elementary;elements;elephant;elephants;elevate;eleven;elicit;eliminate;eliminated;elizabeth;ellen;else;elsewhere;emancipate;embarrass;embody;embrace;emerge;emerged;emergency;emily;emma;emotion;emotional;emotions;emphasis;emphasize;emphatic;empire;empirical;employ;employed;employee;employees;employment;empty;enable;enacted;enclose;enclosed;enclosure;encounter;encountered;encounters;encourage;encouraged;encouraging;end;ended;ending;endless;endure;endured;enemies;enemy;energy;enforce;enforced;enforcement;engaged;engagement;engine;engineer;engineering;engineers;engines;england;english;enhance;enjoy;enjoyed;enjoyment;enlarged;enlighten;enlist;enormous;enormously;enough;enrich;ensure;enter;entered;entering;enterprise;entertain;entertainment;enthusiasm;enthusiastic;entire;entirely;entitled;entity;entrance;entries;entry;enumerate;envious;environment;environmental;envy;episode;episodes;equal;equality;equally;equate;equation;equator;equilibrium;equip;equipment;equipped;equitable;equity;equivalent;eric;error;errors;escape;especially;essay;essence;essential;essentially;establish;established;establishing;establishment;estate;estimate;estimated;estimates;etc;eternal;ethan;ethical;ethics;eugene;euro;europe;european;evacuated;evaluate;evaluation;evaporate;eve;evelyn;even;evening;event;events;eventual;eventually;ever;everlasting;evermore;every;everybody;everyday;everyone;everything;everywhere;evidence;evident;evidently;evoke;evolve;exact;exactly;examination;examine;examined;examines;example;examples;exceed;excellence;excellent;except;excepting;exception;exceptions;excess;excessive;exchange;excite;excited;excitement;exciting;exclaimed;exclude;excluding;exclusive;exclusively;excuse;execute;executive;exempt;exercise;exercises;exert;exhaust;exhibit;exhibition;exile;exist;existed;existence;existing;exists;expand;expanded;expanding;expanse;expansion;expect;expectations;expected;expects;expedite;expel;expenditures;expense;expensive;experience;experienced;experiences;experiment;experimental;experiments;expert;experts;explain;explained;explains;explanation;explicit;explode;exploit;exploration;explore;explosion;explosive;exponent;export;exporting;expose;exposed;exposure;express;expressed;expressing;expression;extant;extend;extended;extending;extension;extensive;extensively;extent;external;extinguish;extra;extract;extraordinary;extreme;extremely;eye;eyebrow;eyes;fabric;fabrics;face;facebook;faced;faces;facilitate;facilities;facing;fact;faction;factor;factories;factors;factory;facts;factual;faculty;fade;fail;failed;fails;failure;failures;faint;fair;fairly;faith;faithful;fall;fallacy;fallen;falling;fallout;falls;false;fame;familiar;families;family;famous;fan;fancy;fans;fantastic;far;fares;farm;farmer;farmers;farming;farms;farsighted;farther;fascinating;fascination;fashion;fast;fasten;fastened;faster;fastest;fat;fatal;fate;father;fathers;fatigue;fatten;fault;faulty;favor;favorable;favorite;favors;favour;fax;fear;fears;feasible;feast;feather;feathers;feature;featured;features;february;fed;federal;federation;feeble;feedback;feeding;feel;feeling;feelings;feels;fees;feet;felix;fell;fellow;fellowship;felt;female;females;fertile;festival;fetch;fever;few;fewer;fibers;fiction;field;fields;fierce;fifteen;fifth;fifty;fig;fight;fighting;fights;figure;figured;figures;filament;file;filing;fill;filled;filling;film;films;filter;final;finalize;finally;finance;financed;financial;financing;find;finding;findings;finds;fine;finest;finger;fingers;finish;finished;finite;finland;fire;fired;fireplace;fires;firing;firm;firmly;firms;first;fiscal;fish;fishing;fit;fits;fitted;five;fix;fixed;flag;flame;flap;flare;flash;flat;flatten;flavor;flavors;flavour;fled;flee;flew;flexible;flies;flight;fling;float;floating;flood;floor;florida;flour;flow;flower;flowers;flown;flows;fluctuate;fluent;fluid;flux;fly;flying;foam;foams;focus;fog;foil;fold;folk;folklore;folks;follow;followed;following;follows;fond;food;foods;fool;foolish;foot;football;footprint;for;forbid;force;forced;forces;forecast;forego;foreign;foresee;forest;forests;foretell;forever;forgave;forget;forgive;forgiven;forgo;forgot;forgotten;fork;form;formal;format;formation;formatting;formed;former;formerly;forming;forms;formula;formulas;formulate;forsake;fort;forth;fortunate;fortunately;fortune;forty;forum;forward;fossil;fought;found;foundation;founded;four;fourteen;fourth;fourty;fox;fraction;fractions;fragment;frame;frames;framework;france;frances;frank;fraternal;fraud;free;freedom;freely;freeze;freight;french;frenchfries;frequencies;frequency;frequent;frequently;fresh;friction;friday;friend;friendliness;friendly;friends;friendship;fright;frighten;frightened;frightening;frog;from;front;frontal;frontier;froze;frozen;fruit;fruits;frustrate;fry;fuel;fulfil;fulfill;full;fully;fun;function;functional;functions;fund;fundamental;funded;funding;funds;funeral;funny;fur;furnish;furnished;furnishing;furniture;further;furthermore;fuse;future;futures;gaiety;gain;gained;gains;galaxy;gallery;gallon;gallons;game;games;gang;gap;garage;garbage;garden;gardens;gary;gas;gasoline;gate;gather;gathered;gathering;gave;gaze;gear;geek;geeks;general;generally;generate;generation;generations;generous;genius;genres;gentle;gentleman;gentlemen;gently;genuine;geography;geometry;george;georgia;gerald;germ;german;germans;germany;gesture;get;gets;getting;giant;giants;gift;gigantic;gin;girl;girlfriend;girls;give;given;gives;giving;glad;glance;glanced;glass;glasses;glee;glide;global;globe;gloria;glory;glossary;glove;glow;glue;go;goal;goals;goat;god;gods;goes;going;gold;golden;golf;gone;good;goodbye;goodness;goods;google;goose;got;gotten;govern;governing;government;governmental;governments;governor;grab;grabbed;grace;grade;grades;grading;gradual;gradually;graduate;graduating;grain;grains;grammar;grand;grandfather;grandmother;grant;granted;grants;grapevine;graph;grasp;grass;grate;grateful;grave;gravity;gray;grayer;grease;great;greater;greatest;greatly;greece;greed;greek;greeks;green;greet;greeted;greetings;gregory;grew;grey;grin;grind;grinned;grip;groan;groove;ground;grounds;group;grouped;groups;grow;growing;grown;grows;growth;guarantee;guard;guards;guess;guest;guests;guidance;guide;guided;guilt;guilty;gulf;gun;gyro;habit;habitat;habits;had;hadnt;hair;haircut;half;halfway;hall;hallway;halt;ham;hamburger;hammer;hampshire;hand;handed;handful;handle;handled;handling;hands;handshake;handsome;handwrite;handwriting;hang;hanging;hannah;happen;happened;happening;happens;happily;happiness;happy;harass;harbor;harbors;harbour;hard;harden;harder;hardly;hardy;harm;harmful;harmless;harmony;harold;harry;harsh;harvest;has;haste;hasten;hat;hate;hats;haunt;have;haven;havent;having;hawaii;hay;he;head;headache;headed;heading;headquarters;heal;health;healthy;heap;hear;heard;hearing;heart;hearts;heat;heated;heather;heating;heaven;heavenly;heavier;heavily;heavy;hed;heel;heels;height;heighten;held;helen;hell;hello;help;helped;helpful;helping;helpless;helps;hemisphere;hen;hence;henry;her;herd;here;hereafter;hereby;hereditary;heredity;herein;heritage;hero;heroic;hers;herself;hes;hesitate;hesitated;hesitation;hi;hid;hidden;hide;hierarchy;high;higher;highest;highly;highway;hill;hills;him;himself;hinder;hindrance;hindsight;hinge;hire;hired;hiring;his;historic;historical;history;hit;hoard;hold;holder;holding;holds;hole;holes;holiday;hollow;hollywood;holy;home;homecoming;homemade;homes;hometown;homework;homogeneous;honest;honesty;honey;honor;honored;honorific;hook;hop;hope;hoped;hopeful;hopefully;hopes;hoping;horizon;horizontal;horn;horns;horror;horse;horses;hospital;hospitals;hostile;hot;hotel;hotels;hour;hours;house;household;houses;housewife;hover;how;howard;however;hug;huge;hum;human;humane;humanity;humans;humble;humor;humorous;humour;hundred;hundreds;hung;hungary;hunger;hungry;hunt;hunter;hunters;hunting;hurrah;hurried;hurry;hurt;husband;hut;hypothesis;hypothesize;ice;iceland;id;idaho;ideal;ideally;ideas;identical;identification;identified;identify;identity;ideological;idle;if;ignorant;ignore;ignored;ill;illegal;illinois;illness;illuminate;illusion;illustrate;illustrated;illustration;im;image;images;imaginary;imagination;imaginative;imagine;imagined;imitate;imitation;immediate;immediately;immense;impact;impacted;imperial;implement;implications;implicit;imply;implying;import;importance;important;importantly;impose;imposed;impossible;impress;impressed;impressions;impressive;improve;improved;improvement;improvements;improving;improvise;impulse;in;inadequate;inbox;inc;incentive;incessant;inch;inches;incident;incidents;incline;inclined;include;included;includes;including;inclusive;income;incompatible;inconsistent;incorporate;increase;increased;increases;increasing;increasingly;incredible;incredibly;indeed;independence;independent;index;indexed;indexing;india;indian;indiana;indians;indicate;indicated;indicates;indication;indigenous;indirect;individual;individuals;indonesia;indoor;induce;industrial;industries;industry;ineffective;inevitable;inevitably;infer;inference;inferior;inflation;influence;influenced;influential;inform;information;informed;ingenious;inherent;inherited;inhibit;initial;initiate;initiative;inject;injure;injured;injuries;injury;ink;inlay;inn;innate;inner;innocence;innocent;innovate;innovation;input;inquire;inquiry;insect;insects;insert;inserting;inside;insight;insist;insisted;inspect;inspection;inspire;inspired;instability;install;installed;instance;instances;instant;instead;instinct;institute;institution;institutions;instruct;instruction;instructions;instructor;instrument;instruments;insufficiently;insult;insulted;insulting;insurance;insure;insured;integer;integrate;integration;intellect;intellectual;intelligence;intelligent;intend;intended;intense;intensely;intensify;intensity;intensive;intention;intentional;intentions;interact;interactions;interest;interested;interesting;interests;interface;interfere;interference;interior;interlay;interlock;interlude;intermediate;intermittent;internal;international;internet;interpret;interpretation;interpreted;interrupt;interruption;intersect;interval;intervals;intervene;intervention;interview;interviews;intimacy;intimate;into;intoxicate;intriguing;intrinsic;introduce;introduced;introduction;intuitive;invade;invariably;invent;invented;invention;inventor;inventors;inventory;inverse;invest;investigate;investigated;investigating;investigation;investigations;investment;investor;investors;invisible;invitation;invite;invited;invoke;involve;involved;involves;involving;inward;iowa;iraq;ireland;irish;iron;ironic;irregularities;irrigate;irritate;is;island;islands;isnt;isolate;isolated;israel;issue;issued;issues;it;italian;italy;itch;item;its;itself;ive;jack;jacket;jacob;jacqueline;jail;jam;jamaica;james;jane;janet;janice;january;japan;japanese;jar;jason;jaw;jazz;jealous;jealousy;jean;jeffrey;jelly;jennifer;jeremy;jerk;jerry;jersey;jesse;jessica;jet;jewel;jimmy;joan;job;jobs;joe;jog;john;johnny;join;joined;joining;joint;joke;jonathan;jones;jordan;jose;joseph;joshua;journal;journey;joy;joyce;juan;judge;judges;judgment;judicial;judith;judy;juggle;julia;julie;july;jump;jumped;jumping;june;jungle;junior;juniors;jurisdiction;jury;just;justice;justified;justify;justin;kansas;karen;katherine;kathleen;kathryn;kathy;kayla;keep;keeping;keeps;keith;kelly;kenneth;kentucky;kept;kettle;kevin;key;keys;kid;kids;kill;killed;killer;killing;kimberly;kind;kindly;kindness;kindred;kinds;king;kingdom;kiss;kitchen;knee;kneel;knees;knew;knife;knit;knock;knocked;knockout;knot;know;knowing;knowledge;known;knows;kyle;label;labels;labor;laboratory;lack;lacked;lacking;ladder;lady;laid;lain;lake;lakes;lamp;land;landed;landing;landlord;lands;landscape;language;languages;laptop;large;largely;larger;largest;larry;last;lasted;late;lately;later;latest;latin;latter;laugh;laughed;laughing;laughter;launch;launched;laura;lauren;law;lawrence;laws;lawyer;lawyers;lay;layers;lazy;lead;leader;leaders;leadership;leading;leaf;league;lean;leaned;leap;leaped;learn;learned;learning;learnt;least;leather;leave;leaves;leaving;lecture;led;lee;left;leg;legacy;legal;legend;legible;legislate;legislation;legislative;legislators;legislature;legitimate;legs;leisure;lend;length;lengthen;lengths;lens;lent;less;lessen;lesser;lesson;lessons;let;lets;letter;letters;letting;level;levels;lever;leverage;lewd;liable;liberals;liberate;liberty;librarian;libraries;library;licence;license;licensed;lick;lid;lie;lies;life;lifeguard;lifetime;lift;lifted;light;lighten;lighting;lightly;lightning;liked;likelihood;likely;likeness;likes;lillian;limb;limit;limitations;limited;limits;lincoln;linda;line;linear;lines;linguistic;link;linked;lion;lip;lips;lipstick;liquid;liquidation;liquor;lisa;list;listed;listen;listened;listeners;listening;listings;lists;literally;literary;literature;litigate;little;live;lived;lively;lives;living;load;loaded;loads;loaf;loan;loans;lobby;local;locally;locate;located;location;locations;lock;locked;locking;locomotion;lodge;log;logic;logical;logs;london;lonely;long;longer;look;looked;looking;lookout;looks;loose;loosen;lord;lori;lose;losing;loss;losses;lost;lot;lots;loud;louis;louisiana;love;loved;lovely;lover;low;lower;lowered;lowest;loyal;loyalty;luck;lucky;lumber;lump;lunch;lung;lungs;luxury;lying;machine;machinery;machines;mad;made;magazine;magazines;magic;magnet;magnetic;magnificent;magnify;magnitude;mail;mailbox;mailing;main;maine;mainland;mainly;maintain;maintained;maintaining;maintains;maintenance;maize;major;majority;make;makers;makes;making;males;mall;mama;man;manage;managed;management;manager;managers;managing;manifest;manipulate;mankind;manner;mans;manual;manufacture;manufactured;manufacturer;manufacturers;manufacturing;many;map;marble;march;margaret;margin;maria;marie;marilyn;mark;marked;market;marketing;markets;marks;marriage;marriages;married;marry;mars;marshal;mart;martha;mary;maryland;mason;mass;massachusetts;massage;masses;massive;master;masterpiece;mat;match;matchbook;matched;matching;mate;material;materials;maternal;math;mathematical;mathematics;matrix;matter;matters;matthew;mature;maturity;maximum;may;maybe;mayor;me;meal;meals;mean;meaning;meaningful;meanings;means;meant;meantime;meanwhile;measure;measured;measurement;measurements;measures;measuring;meat;mechanic;mechanical;mechanism;meddle;mediate;medical;medicine;medium;meet;meeting;meetings;meets;megan;melissa;melody;melt;melted;melting;member;members;membership;memorial;memorise;memorize;memory;men;mend;mental;mention;mentioned;mentor;merchandise;merchant;merchants;mercy;mere;merely;merge;merged;merger;merging;merit;merry;mess;message;messages;messenger;met;metabolism;metal;metals;metaphor;method;methods;metropolitan;mexican;mexico;mice;michael;michelle;michigan;microscope;middle;midnight;might;mighty;migrate;mike;mild;mildred;mile;miles;military;milk;million;millions;mills;mind;minds;mine;mineral;minerals;mines;mini;minimal;minimum;minister;minnesota;minor;minority;minus;minute;minutes;miracle;mirror;misconceive;miserable;misery;mishap;mislead;miss;missed;missile;missiles;missing;mission;missionary;mississippi;missive;missouri;misspell;mist;mistake;misunderstand;mix;mixed;mixture;mixup;moan;mobile;mode;model;moderate;moderation;modern;modest;modestly;modesty;modify;moist;moisture;mold;molecular;molecules;moment;momentary;moments;momentum;monday;money;monitor;monitoring;monkey;monopoly;montana;month;monthly;months;monument;mood;moon;moonlight;moor;moral;morality;more;moreover;morning;morocco;mortgage;most;mostly;motel;mother;motherhood;motherly;mothers;motion;motivate;motivation;motive;motives;motor;motorcycle;mount;mountain;mountains;mountaintop;mounted;mourn;mouse;mouth;move;moved;movement;movements;movers;moves;movie;movies;moving;mow;mr;mrs;much;mud;muddle;mug;multiple;multiplication;multiplied;multiply;municipal;murder;muscle;muscles;museum;music;musical;musician;musicians;must;mutual;my;myself;mysteries;mysterious;mystery;myth;nail;nails;naked;name;named;namely;nancy;narrate;narrative;narrow;nathan;nation;national;nations;native;natural;naturally;nature;naval;navigate;navy;near;nearby;nearer;nearest;nearly;neat;neatly;nebraska;necessarily;necessary;necessity;neck;need;needed;needing;needle;needs;negative;neglect;neglectful;negotiate;negotiations;neighbor;neighborhood;neighboring;neighbors;neither;nephew;nerd;nerds;nerves;nervous;nest;netherlands;network;networking;networks;neutral;nevada;never;nevertheless;new;newer;newest;newly;news;newspaper;newspapers;next;nice;niche;nicholas;nicole;niece;night;nightmare;nighttime;nineteen;ninety;ninth;no;noble;nobody;nod;nodded;noise;nominate;non;none;nonsense;noon;nor;norm;normal;normalize;normally;norms;north;northern;northwest;norway;nose;not;notable;notably;notate;note;notebook;noted;nothing;notice;noticed;notified;notion;noun;nouns;novel;novels;november;now;nowadays;nowhere;nuclear;nude;nuisance;null;number;numbers;numeral;numerals;numerous;nurse;nursery;nut;nutrient;nutrients;nuts;nutshell;oar;oath;obedience;obedient;obey;object;objection;objective;objectives;objects;obligations;oblige;obliged;observation;observations;observe;observed;observers;obsolete;obstacle;obstruct;obtain;obtained;obvious;obviously;occasion;occasional;occasionally;occasions;occupation;occupied;occupy;occur;occurred;occurrence;occurring;occurs;ocean;oceans;october;odd;of;off;offence;offend;offense;offensive;offer;offered;offering;offerings;offers;officer;officers;offices;official;officials;officiate;offspring;often;oh;ohio;oil;okay;oklahoma;old;older;oldest;olympic;olympics;omission;omissions;omit;omitted;on;one;ones;online;only;onto;open;opened;opening;openings;openly;opens;opera;operate;operated;operating;operation;operational;operations;operator;operators;opinion;opinions;opponent;opportunities;oppose;opposed;opposite;opposition;optimal;option;or;oral;orange;orbit;order;ordered;orderly;orders;ordinarily;ordinary;oregon;organic;organization;organizations;organize;organized;orientate;oriented;origin;original;originally;originate;ornament;ornate;oscillate;other;others;otherwise;ought;ounce;ounces;our;ourselves;out;outcome;outdoor;outer;outfield;outline;outlook;output;outputs;outside;outstanding;outward;oven;over;overall;overcome;overdo;overdraw;overflow;overhead;overhear;overlap;overnight;overseas;oversee;overtake;overthrow;overturn;overused;overweight;overwhelming;owe;owen;owes;own;owned;owner;owners;ownership;owning;oxidation;oxygen;pacific;pack;package;packed;pad;paddle;page;pages;paid;pain;painful;paint;painted;painter;painting;paintings;pair;pakistan;palace;pale;pamela;pan;pancake;panic;papa;paper;paperback;papers;parade;paragraph;parallel;parasite;parasites;parcel;pardon;parent;parenthesis;parents;paris;park;parked;parking;parliament;part;partial;partially;participate;participation;particle;particles;particular;particularly;parties;partly;partner;parts;party;pass;passage;passages;passed;passenger;passengers;passes;passing;passion;passive;password;past;paste;pasted;pastry;pasture;pat;patent;path;patience;patient;patients;patricia;patrick;patriotic;patrol;pattern;patterns;paul;pause;paused;paw;pay;payback;paying;payment;payments;peace;peaceful;pearl;peas;peasant;peck;peculiar;pedal;peel;peep;pen;penalty;pencil;pendulum;pennsylvania;penny;people;peoples;pepper;per;perceive;percent;percentage;perception;perfect;perfection;perfectly;perform;performance;performances;performed;perhaps;period;periods;permanent;permission;permit;permits;permitted;perpendicular;perpetual;persist;person;personal;personality;personally;personnel;persons;perspective;persuade;persuaded;persuasion;pertinent;pervade;pet;peter;petitioner;phenomena;phenomenon;philadelphia;philip;philippines;phillip;philosophy;phone;photo;photograph;photography;phrase;physical;physically;physics;piano;pick;picked;picking;pickup;picture;pictured;pictures;pie;piece;pieces;pierce;pig;pigeon;pigs;pike;pile;pilot;pin;pinch;pine;pink;pinpoint;pioneer;pipe;pistol;pitch;pitcher;pity;place;placed;placement;places;placing;plain;plains;plan;plane;planes;planet;planetary;planets;planned;planning;plans;plant;planted;plants;plastic;plastics;plate;plates;platform;play;played;player;players;playground;playing;plays;plead;pleasant;please;pleased;pleasure;plenty;plot;plow;pluck;plug;plural;plus;pocket;podcast;poem;poems;poet;poetic;poetry;poets;point;pointed;pointing;points;poison;poke;poland;pole;police;policeman;policies;policy;polish;polite;political;politician;politicians;politics;pollution;pond;ponder;pont;pony;pool;poor;poorer;poorly;pop;popcorn;popular;population;porch;port;portion;pose;position;positions;positive;positively;possess;possessed;possession;possessor;possibilities;possibility;possible;possibly;post;postpone;postulate;pot;potato;potatoes;potential;pound;pounds;pour;poured;poverty;powder;power;powered;powerful;powers;practically;practice;practiced;practices;practise;pragmatic;prairie;praise;praised;pray;prayer;preach;preached;precede;preceding;precious;precipitate;precise;precisely;precision;predict;predicted;prefer;preference;preferences;preferred;prefers;prejudice;preliminary;premature;premier;premise;preparation;prepare;prepared;preparing;prescribe;presence;present;presentation;presented;presently;presents;preserve;preset;preside;president;press;pressed;pressing;pressure;pressures;prestige;presumably;presume;pretend;pretense;pretty;prevail;prevent;prevented;prevention;previous;previously;prey;price;prices;prick;pride;priest;primarily;primary;prime;primitive;prince;princess;principal;principle;principles;print;printed;prior;priority;prison;prisoners;privacy;private;privilege;prize;probabilities;probability;probable;probably;problem;problems;procedure;procedures;proceed;proceeded;process;processed;processes;processing;procession;proclaim;procure;procurement;produce;produced;producer;produces;producing;product;production;productive;products;profess;profession;professional;professionally;professor;profit;profits;profound;program;programming;programs;progress;prohibit;prohibited;prohibition;project;projects;prominent;promise;promised;promises;promising;promote;promotion;promotions;prompt;prompting;promptly;prone;pronounce;pronunciation;proof;proofread;propaganda;propagate;propensity;proper;properly;properties;property;proportion;proposal;proposals;propose;proposed;proprietor;prose;prospect;prospective;prospects;prosper;protect;protected;protecting;protection;protein;protest;protestant;proud;prove;proved;proves;provide;provided;providence;provider;providers;providing;province;provision;provisions;provocative;provoke;prudence;psychological;psychology;public;publication;publications;publicity;publicize;publicly;publish;published;publisher;pull;pulled;pulling;pump;pumped;punch;punctual;punctuation;puncture;punish;punishment;pupil;pupils;puppy;purchase;purchased;purchases;pure;purely;purple;purport;purpose;purposes;pursuant;pursue;push;pushed;pushing;put;puts;putting;puzzle;puzzling;qualification;qualifications;qualified;qualify;qualities;quality;quantity;quarrel;quart;quarter;quarters;quarts;queen;queries;query;question;questioned;questioning;questions;quickly;quicksand;quiet;quietly;quit;quite;quotation;quote;quoted;rabbit;race;rachel;racial;racing;radar;radiate;radiation;radio;radius;rail;railroad;rain;rainbow;raise;raised;raising;rake;ralph;ran;ranch;random;randomize;randy;rang;range;ranging;rank;ranks;rapid;rapidly;rarely;rate;rather;rating;ratio;rational;raw;ray;raymond;rays;razor;reach;reached;reaches;reaching;reaction;reactionary;reactions;read;reader;readers;readily;reading;ready;real;realign;realise;realism;realistic;reality;realization;realize;realized;really;rear;reason;reasonable;reasonably;reasons;rebecca;rebel;recall;recalled;receipt;receive;received;receives;receiving;recent;recently;reception;recipe;recognise;recognition;recognize;recognized;recommend;recommendation;recommendations;recommended;reconcile;record;recorded;recording;records;recovery;recreation;recruit;rectangle;recur;red;reduce;reduced;reducing;refer;reference;references;referred;refers;refine;reflect;reflected;reflecting;reflection;reflections;reflects;refrain;refresh;refrigerator;refund;refuse;refused;refute;regard;regarded;regarding;regardless;regards;regime;regiment;region;regional;regions;register;registered;registration;regret;regular;regularly;regulate;regulating;regulations;rehabilitation;reign;reinforce;reinforced;rejected;rejoice;relate;related;relation;relations;relationship;relationships;relative;relatively;relatives;relax;release;released;releases;relevance;relevant;reliable;relief;relieve;relieved;relieving;religion;religious;rely;remain;remainder;remained;remaining;remains;remark;remarkable;remarked;remarks;remedy;remember;remembered;remind;reminded;remote;removable;removal;remove;removed;removing;renaissance;render;rendered;rent;renter;reorganization;reorganize;repair;repeat;repeated;repetition;replace;replaced;replacement;replacements;replied;reply;report;reported;reporter;reporters;reports;represent;representative;representatives;represented;representing;represents;repress;reproduce;reproduction;republic;republican;republicans;reputation;request;require;required;requirement;requirements;requiring;rescue;research;researching;resent;reservation;reserved;reservoir;residence;resident;residential;residents;residue;resign;resistance;resolute;resolution;resolve;resolved;resonant;resource;resources;respect;respectable;respective;respectively;respects;respond;responded;response;responses;responsibilities;responsibility;responsible;rest;restated;restating;restaurant;restore;restored;restrict;restrictions;result;resulted;resulting;results;resumed;retail;retailers;retain;retained;retard;retire;retired;retirement;retrieve;return;returned;returning;returns;reveal;revealed;revenge;revenue;revenues;reverberate;reverend;reverse;review;revile;revise;revive;revolt;revolution;revolutionary;revolve;reward;rhode;rhyme;rhythm;ribbon;rice;rich;richard;rid;ridden;ride;ridge;riding;rifle;rifles;right;rightful;rights;rigid;rigor;ring;rings;rinse;ripe;ripen;rise;risen;rises;rising;risk;risked;risks;ritual;rival;rivalry;river;rivers;road;roads;roar;roast;roasted;rob;robbery;robert;rock;rocket;rocks;rocky;rod;rode;roger;role;roles;roll;rolled;rolling;roman;romania;romantic;rome;ronald;roof;room;roommate;rooms;root;roots;rose;rot;rotate;rotating;rotten;rough;roughly;round;rounded;roundup;route;routine;row;rows;roy;royal;royalty;rub;rubbed;rubber;rubbish;rude;rudely;rug;ruin;rule;ruled;ruler;rules;ruling;rumour;run;rung;running;runs;rural;rush;rushed;russell;russia;russian;russians;rust;ruth;ryan;sack;sacrifice;sad;sadden;saddle;sadly;safe;safeguard;safely;safer;safety;said;sail;sailboat;sailed;sailing;sailor;sailors;sake;salary;sale;sales;salesman;salmon;salon;salt;salvation;sam;samantha;same;sample;samples;sampling;samuel;sand;sandbox;sandpaper;sandra;sang;santa;sara;sarah;sat;satellite;satellites;satisfaction;satisfactory;satisfied;satisfy;saturate;saturday;saucer;savage;save;saved;saving;savings;saw;sawmill;say;saying;says;scalar;scale;scales;scan;scarce;scarcely;scare;scared;scatter;scattered;scene;scenery;scenes;schedule;scheduled;scheme;scholars;scholarship;school;schools;science;sciences;scientific;scientist;scientists;scissors;scold;scope;scorch;score;scorn;scott;scramble;scrambled;scrape;scratch;scream;screen;screw;scribble;script;scripts;scrub;sea;seal;sean;seaport;search;searching;seas;season;seat;seated;seats;second;secondary;secondly;seconds;secrecy;secret;secretary;secrete;secrets;section;sections;sector;secure;security;see;seed;seeds;seeing;seek;seeking;seem;seemed;seeming;seems;seen;sees;segment;seize;seized;seizing;seizure;seldom;select;selected;selection;self;selfish;sell;selling;sellout;selves;senate;senator;send;sender;sending;senior;sense;sensible;sensitive;sensitivity;sensual;sent;sentence;sentences;sentiment;separate;separated;separately;separation;september;sequence;sergeant;series;serious;seriously;servant;servants;serve;served;server;serves;service;services;serving;session;sessions;set;sets;setting;settings;settle;settled;settlement;settlers;seven;seventeen;seventh;seventy;several;severe;sew;sex;sexual;shade;shadow;shadows;shaft;shake;shaking;shall;shallow;shame;shape;shaped;shapes;share;shared;shares;sharing;sharon;sharp;sharpen;sharply;shave;she;shear;shed;sheep;sheet;sheets;shelf;shell;shells;shelter;shelters;sheriff;shes;shield;shielding;shift;shifted;shilling;shine;shining;shinning;ship;shipping;ships;shirley;shirt;shiver;shock;shoe;shoes;shoestring;shook;shoot;shooting;shop;shopper;shoppers;shopping;shore;short;shortcut;shorten;shorter;shortly;shorts;shot;shots;should;shoulder;shoulders;shouldn;shout;shouted;shouting;shovel;show;showed;shower;showing;shown;shows;shrink;shrinking;shrug;shuffle;shut;sibling;sick;side;sides;sidewalk;sigh;sighed;sight;sign;signal;signals;signature;significance;significant;signify;signs;silence;silencing;silent;silk;silly;silver;similar;similarly;simple;simplest;simplicity;simplify;simply;simultaneous;simultaneously;sin;since;sincere;sincerely;sing;singing;single;sink;sip;sir;sister;sisters;sit;site;sites;sitter;sitting;situation;situations;six;sixteen;sixth;sixties;size;sizes;sizzling;skeleton;sketch;ski;skill;skilled;skills;skin;skins;skip;skirt;sky;skype;slabs;slap;slave;slavery;slaves;slay;sleep;sleeping;slender;slept;slid;slide;slight;slightly;slim;sling;slink;slip;slipped;slippery;slit;slope;slow;slowed;slowly;small;smaller;smallest;smart;smash;smell;smile;smiled;smiling;smite;smith;smoke;smooth;snake;snakes;snapped;snatch;sneak;sneeze;sniff;snore;snow;snowman;snowstorm;so;soak;soap;social;socialist;societies;society;sock;socks;soft;soften;softly;software;soil;solar;sold;soldier;soldiers;solely;solid;solitary;solution;solutions;solve;solved;some;somebody;someday;somehow;someone;something;sometime;sometimes;somewhat;somewhere;son;song;songs;sons;soon;soothe;sophisticated;sorrow;sorry;sort;sorting;sought;soul;souls;sound;sounded;sounds;soup;sour;source;sources;south;southeast;southern;southerners;sovereign;sovereignty;soviet;sow;space;spaces;spaceship;spade;spain;spam;span;spanish;spare;spark;sparkle;spatial;speak;speaker;speaking;special;specialist;specialists;species;specific;specifically;specified;specify;specifying;specimen;spectrum;speculate;speech;speeches;speed;spell;spelled;spelling;spencer;spend;spending;spent;sphere;spider;spill;spine;spinning;spiral;spirit;spirits;spiritual;spit;spite;splendid;split;spoil;spoke;spoken;sponge;sponsor;sponsored;spontaneous;spoon;sport;sports;spot;spots;spouse;spray;sprayed;spread;spring;springs;sprout;square;squares;squash;squeak;squeal;st;stable;stadium;staff;stage;stain;staining;stair;stairs;stalk;stamp;stand;standards;standing;stands;star;stare;stared;staring;starlight;starring;stars;start;started;starting;startled;starts;starve;state;stated;statement;statements;states;station;stationary;stations;statistic;statistics;status;stay;steadily;steady;steal;steam;steel;steep;steer;stem;stems;step;stephanie;stephen;stepped;stepping;steps;stereotype;stern;steven;stick;sticks;sticky;stiff;stiffen;still;stimulate;sting;stings;stink;stipulate;stipulation;stir;stirring;stitch;stock;stockholders;stocking;stocks;stomach;stone;stones;stood;stop;stopped;stops;storage;store;stored;stores;stories;storm;stormy;story;storybook;stove;straight;straighten;strange;stranger;strap;strata;strategic;strategy;straw;stream;streaming;streamline;streams;street;streets;strength;strengthen;stress;stressed;stresses;stretch;stretched;strictly;stride;strike;strikes;striking;string;strip;stripe;strips;strive;stroke;strong;stronger;strongly;struck;structure;struggle;stuck;student;students;studied;studies;studio;study;studying;stuff;stumble;stumbled;stupid;stupidly;style;styles;subdivide;subjected;subjective;sublet;submerge;submitted;subordinate;subscription;subsequent;subside;subsidize;substance;substances;substantial;substantially;substrate;subtract;subtracting;suburban;succeed;success;successful;successfully;succession;sucessful;such;suck;sucks;sudden;suddenly;suffer;suffered;suffering;suffice;sufficiently;suffix;sugar;suggest;suggestion;suggestions;suggests;suit;suitable;suitcase;suite;suited;suits;sum;summarize;summary;summer;summertime;sun;sunburn;sunday;sunflower;sung;sunlight;superficial;superior;superstition;supervise;supervision;supper;supplement;supplemental;supplied;supplies;supply;support;supported;supporting;suppose;supposed;suppress;supreme;sure;surely;surface;surfboard;surplus;surprise;surprised;surprises;surprising;surrender;surround;surrounded;surrounding;survey;survival;survive;susan;suspect;suspected;suspend;suspended;suspicion;suspicious;sustain;sustained;swallow;swam;swear;sweat;sweden;sweep;sweeping;sweet;sweeten;swell;swept;swift;swim;swimming;swing;switch;switches;switzerland;swum;swung;syllable;syllables;symbol;symbolic;symbolize;symbols;sympathy;symptom;synchronous;synthetic;system;systems;table;tabulate;taco;tactics;tags;tail;tailor;take;taken;takes;taking;talent;talents;tales;talk;talked;talking;tall;tame;tammy;tangible;tank;tap;tape;target;targets;task;tasks;taste;taught;tax;taxi;taxpayers;taylor;tea;teacher;teachers;teacup;team;tear;tears;tease;teaspoon;tech;technical;technically;technique;techniques;technology;teenage;teeth;telephone;television;tell;telling;tells;temper;temperature;temperatures;temple;temporarily;temporary;tempt;ten;tend;tendency;tender;tends;tennessee;tense;tension;tent;tenth;teresa;term;terminal;terminology;terms;terrible;terribly;terrify;terror;terry;test;tested;testimony;tests;texas;text;textbook;textile;texting;texture;than;thank;thanks;thanksgiving;that;thats;thaw;the;theater;theatrical;thee;theft;their;theirs;them;themselves;then;theology;theorem;theoretical;theories;theory;therapy;there;thereafter;thereby;therefore;theres;theresa;these;they;theyre;thickness;thief;thin;thing;things;think;thinking;thinks;third;thirst;thirsty;thirteen;thirty;this;thomas;thorough;thoroughly;those;thou;though;thought;thoughts;thousand;thousands;thread;threat;threaten;threatened;threatening;three;threw;thrilled;thrive;throat;through;throughout;throw;thrown;thrust;thumb;thunder;thunderstorm;thursday;thus;thy;tick;ticket;tickle;tide;tidy;tie;tied;tiffany;tight;tighten;tightly;tile;till;time;times;timothy;tin;tiny;tip;tire;tired;tissue;title;to;toast;today;todays;toe;toes;together;told;tolerance;tolerant;tolerate;tommy;tomorrow;tone;tongue;tonight;tons;too;took;tool;tools;tooth;toothache;toothbrush;toothpaste;top;topic;tore;torn;torture;tossed;total;totally;touch;touchdown;touched;tour;tournament;tow;toward;towards;towel;tower;town;towns;toy;trace;traces;track;tracks;tractor;trade;trademark;traders;trading;tradition;traditional;traffic;tragedies;tragedy;tragic;trail;train;trained;training;trains;trait;tranquil;transact;transaction;transcribe;transfer;transferred;transform;transformation;transformed;transition;translate;translator;transmit;transparent;transport;transportation;trap;travel;traveled;traveling;travels;tray;tread;treasure;treasury;treat;treated;treaty;tree;trek;tremble;trembling;trend;trends;trial;trials;triangle;tribe;tribes;tribute;trick;tricks;tried;tries;trim;trip;triumph;trivial;troops;tropical;trouble;troubled;troubles;troubleshoot;truck;true;truly;trunk;trust;truth;try;trying;tsunami;tube;tubes;tuesday;tug;tumble;tumbled;tune;turkey;turn;turned;turning;turnout;turns;tutor;tv;tweet;twelve;twentieth;twenty;twice;twist;twitter;two;tyler;type;types;typical;ugly;ultimate;ultimately;umbrella;unable;uncertain;uncle;unclean;unconscious;under;undergo;underlie;underline;underlying;underneath;understand;understanding;understood;undertake;undeveloped;undo;undoing;undoubtedly;undress;unduly;uneasy;unemployment;unexpected;unexpectedly;unfasten;unfold;unfolding;unfortunately;unhappy;uniform;unify;union;unions;unit;unite;united;units;unity;universal;universe;universities;university;unknown;unless;unlike;unlikely;unlock;unnecessary;unpack;unrelated;unreliable;unscramble;untidy;until;unto;unusual;up;update;updated;upgrade;uphold;upon;upper;upright;upset;upstairs;upsurge;uptight;upward;upwards;urban;urge;urged;urgent;urging;us;usage;use;used;useful;user;users;uses;using;usual;usually;utility;utilize;utter;utterly;vacation;vague;vain;valid;valley;valleys;valuable;value;valued;values;van;vanish;vapor;vapour;variable;variables;variation;variations;varied;varieties;variety;various;vary;varying;vast;ve;vegetable;vegetables;vehicle;vehicles;vein;velocity;venezuela;venture;verb;verbal;verbs;verdict;verify;vermont;version;versus;vertical;very;vessel;vessels;veteran;vex;via;viable;vibrate;vibration;vice;victims;victoria;victory;video;view;viewed;viewing;views;vigorous;village;villages;vincent;vineyard;vintage;violate;violence;violent;virgin;virginia;virtual;virtually;virtue;virus;viscous;visible;vision;visit;visited;visiting;visitor;visual;vital;vivid;vogue;voice;voices;volt;volume;volumes;voluntary;voted;voter;voters;votes;voting;vowel;voyage;wage;wages;wagon;wagons;wail;waist;waistline;wait;waited;waiter;waiting;wake;walk;walked;walking;walks;wall;wallpaper;walls;walter;wander;want;wanted;war;warehouse;warfare;warm;warmth;warn;warning;warrant;wars;was;wash;washing;wasn;wasnt;waste;wasteful;watch;watched;watching;water;watered;waters;wave;waved;waves;wax;way;wayne;ways;we;weak;weaken;wealth;wealthy;weapon;weapons;wear;wearing;weary;weather;weave;web;webpage;website;wed;wednesday;weed;weeds;week;weekday;weekly;weeks;weep;weigh;weight;welcome;well;wend;went;were;weren;werent;west;western;wet;weve;whale;what;whatever;whats;wheat;wheel;wheels;when;whenever;where;whereas;whereby;whichever;while;whine;whip;whirl;whirlpool;whisky;whisper;whistle;white;whiten;whither;who;whole;wholly;whom;whose;why;wicked;wide;widely;widow;widower;width;wife;wild;wildlife;wildly;will;william;willie;win;wind;window;windows;winds;wine;wing;wink;winning;winter;wipe;wire;wires;wiring;wisdom;wise;wish;wishes;wit;with;withdraw;withhold;without;withstand;wobble;woes;woke;woken;wolf;woman;won;wonder;wondering;wont;wood;wooden;woods;wool;word;words;wore;work;worked;worker;workers;working;works;workshop;world;worlds;worm;worn;worried;worrying;worse;worship;worst;worth;would;wouldn;wouldnt;wound;wounded;wreck;wrestle;wright;wring;wrist;write;writer;writers;writing;yard;yards;yawn;yeah;year;years;yell;yellow;yes;yet;york;you;youd;youll;young;youngest;youre;yours;zachary;zero;zip;zone;th;zoo;deed;feed;edge;heed;idea;kick;like;mill;nine;once;pope;rope;spin;trot;utah;vote;wrap;your;zoom;added;raced;fence;wedge;teach;which;juice;thick;yield;theme;widen;women;wiped;quick;wrong;zones;wrote;youth;youve;worry;sixty;crazy;pizza;canada;decade;tended;office;sewage;washed;wished;reject;weaker;yelled;victim;within;zoomed;utopia;unique;wrongs;writes;worthy;vacuum;anyway;alabama;tobacco;radical;weekend;welfare;wedding;whether;wriggle;subject;yankees;willing;vietnam;wyoming;younger;wrapped;squeeze;written;witness;youtube;database;capacity;standard;wondered;surfaces;teaching;wherever;yielding;subjects;weakness;wireless;whomever;unwanted;yourself;synopsis;requires;visitors;trustees;available;practical;succeeded;yesterday;waterfall;suggested;whispered;worldwide;judgments;livestock;wonderful;treatment;wisconsin;youngster;uppermost;quarterly;territory;ambassador;vocabulary;scoreboard;widespread;sufficient;strategies;tightening;washington;adjustment;skyscraper;unemployed;tremendous;volunteers;yourselves;structural;substitute;spectacular;unscrambled;unscrambler;unconfirmed;underground;sympathetic;transmitted;conjunction;supermarket;translation;superimpose;unfortunate;opportunity;restructure;unsuccessful';

function processing(loadstate) {
    if (loadstate == 'loading')
        document.getElementById('processing').innerHTML = 'Processing...';
    else
        document.getElementById('processing').innerHTML = '';
}

Array.prototype.sortrandom = function () {
    var text = this;
    function rsort() {
        return(Math.round(Math.random()) - 0.5);
    }
    text = text.sort(rsort);
    return text;
}

function scramwrd(wrd) {
    var fcap = 'no';
    if (wrd.slice(0, 1).search(/[A-Z]/g) != -1)
        fcap = 'yes';
    wrd = wrd.toLowerCase().split('').sortrandom().join('');
    if (fcap == 'yes')
        wrd = wrd.slice(0, 1).toUpperCase() + wrd.slice(1);
    return wrd;
}

var wordlistlen = 0;
var wordlistsortarr = new Array();

function descramwrd(wrd) {
    if (wordlistlen == 0) {
        wordlist = wordlist.split(';');
        wordlistlen = wordlist.length;
        for (x = 0; x < wordlistlen; x++) {
            wordlistsortarr[x] = wordlist[x].split('').sort().join('');
        }
    }
    var word = wrd;
    var word = word.toLowerCase().split('').sort().join('');
    var unscr = new Array();
    var unscrlen = 0;
    var leftcrlb = '';
    var rightcrlb = '';
    for (x = 0; x < wordlistlen; x++) {
        if (word == wordlistsortarr[x]) {
            unscr[unscrlen] = wordlist[x];
            unscrlen++;
        }
    }
    if (unscrlen == 0)
        unscr[unscrlen] = wrd;
    if (unscrlen > 1) {
        leftcrlb = '(';
        rightcrlb = ')';
    }
    wrd = leftcrlb + unscr.join('  |  ') + rightcrlb;
    return wrd;
}

function scram(func) {
    cache_copy();
    var text = document.getElementById('input_output').value;
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    text = text.replace(/\r/gi, '');
    text = text.replace(/([^a-z ])/gi, ' $1 ');
    text = text.split(' ');
    var len = text.length;
    var textarr = new Array();
    if (func == 'scm') {
        for (var x = 0; x < len; x++) {
            textarr[x] = scramwrd(text[x]);
        }
    } else {
        for (var x = 0; x < len; x++) {
            textarr[x] = descramwrd(text[x]);
        }
    }
    text = textarr.join(' ');
    text = text.replace(/ ([^a-z ]) /gi, '$1');
    document.getElementById('input_output').value = text;
    processing('done');
}

// Sort Lines
Array.prototype.clean = function (remove_item) {
    var arr;
    var len = this.length;
    for (arr = 0; arr < len; arr++) {
        if (this[arr] == remove_item) {
            this.splice(arr, 1);
            arr--;
        }
    }
    return this;
}

var delimiter = '';
var snum = 1;

function ntvsortci(a, b) {
    x = a.toString().toLowerCase();
    y = b.toString().toLowerCase();
    if (x < y)
        return -1;
    if (x > y)
        return 1;
    return 0;
}

function ntvspsortcs(a, b) {
    x = a.toString().split(delimiter).slice(snum).join(delimiter);
    y = b.toString().split(delimiter).slice(snum).join(delimiter);
    if (x < y)
        return -1;
    if (x > y)
        return 1;
    return 0;
}

function ntvspsortci(a, b) {
    x = a.toString().toLowerCase().split(delimiter).slice(snum).join(delimiter);
    y = b.toString().toLowerCase().split(delimiter).slice(snum).join(delimiter);
    if (x < y)
        return -1;
    if (x > y)
        return 1;
    return 0;
}

function ntvsort(csty) {
    cache_copy();
    delimiter = document.getElementById('s_delimiter').value;
    snum = document.getElementById('s_num').value - 1;
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/g, '');
    if (delimiter == '' && snum == '0') {
        if (csty == 'cs') {
            text = text.split('\n').sort().clean('').join('\n');
        } else {
            text = text.split('\n').sort(ntvsortci).clean('').join('\n');
        }
    } else {
        if (csty == 'cs') {
            text = text.split('\n').sort(ntvspsortcs).clean('').join('\n');
        } else {
            text = text.split('\n').sort(ntvspsortci).clean('').join('\n');
        }
    }
    document.getElementById('input_output').value = text;
}

// Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license Author: Jim Palmer (based on chunking idea from Dave Koelle)

function naturalSort(a, b) {
    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
            sre = /(^[ ]*|[ ]*$)/g,
            dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            hre = /^0x[0-9a-f]+$/i,
            ore = /^0/,
            i = function (s) {
                return naturalSort.insensitive && ('' + s).toLowerCase() || '' + s
            },
            x = i(a.toString()).replace(sre, '') || '',
            y = i(b.toString()).replace(sre, '') || '',
            xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
            yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
            oFxNcL, oFyNcL;
    if (yD)
        if (xD < yD)
            return -1;
        else if (xD > yD)
            return 1;
    for (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
            return (isNaN(oFxNcL)) ? 1 : -1;
        } else if (typeof oFxNcL !== typeof oFyNcL) {
            oFxNcL += '';
            oFyNcL += '';
        }
        if (oFxNcL < oFyNcL)
            return -1;
        if (oFxNcL > oFyNcL)
            return 1;
    }
    return 0;
}

function naturalSortSplit(a, b) {
    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
            sre = /(^[ ]*|[ ]*$)/g,
            dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            hre = /^0x[0-9a-f]+$/i,
            ore = /^0/,
            i = function (s) {
                return naturalSort.insensitive && ('' + s).toLowerCase() || '' + s
            },
            x = i(a.toString().split(delimiter).slice(snum).join(delimiter)).replace(sre, '') || '',
            y = i(b.toString().split(delimiter).slice(snum).join(delimiter)).replace(sre, '') || '',
            xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
            yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
            oFxNcL, oFyNcL;
    if (yD)
        if (xD < yD)
            return -1;
        else if (xD > yD)
            return 1;
    for (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
            return (isNaN(oFxNcL)) ? 1 : -1;
        } else if (typeof oFxNcL !== typeof oFyNcL) {
            oFxNcL += '';
            oFyNcL += '';
        }
        if (oFxNcL < oFyNcL)
            return -1;
        if (oFxNcL > oFyNcL)
            return 1;
    }
    return 0;
}

//End of Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license

function natsort(csty) {
    cache_copy();
    naturalSort.insensitive = csty;
    delimiter = document.getElementById('s_delimiter').value;
    snum = document.getElementById('s_num').value - 1;
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r/g, '');
    if (delimiter == '' && snum == '0') {
        text = text.split('\n').sort(naturalSort).clean('').join('\n');
    } else {
        text = text.split('\n').sort(naturalSortSplit).clean('').join('\n');
    }
    document.getElementById('input_output').value = text;
}

function complengths(a, b) {
    x = a.toString().length;
    y = b.toString().length;
    if (x < y)
        return -1;
    if (x > y)
        return 1;
    return 0;
}

function sortbylength() {
    cache_copy();
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r\n/g, '\n');
    text = text.split('\n').sort(complengths).clean('').join('\n');
    document.getElementById('input_output').value = text;
}

Array.prototype.shuffle = function () {
    var x = this.length;
    if (x == 0)
        return false;
    var y = 0;
    var temp_x = '';
    var temp_y = '';
    while (--x) {
        y = Math.floor(Math.random() * (x + 1));
        temp_x = this[x];
        temp_y = this[y];
        this[x] = temp_y;
        this[y] = temp_x;
    }
    return this;
}

function sortrandom() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    text = text.replace(/\r\n/g, '\n');
    text = text.split('\n').shuffle().clean('').join('\n');
    document.getElementById('input_output').value = text;
}

function reverseorder() {
    cache_copy();
    var text = document.getElementById('input_output').value;
    var belong2 = 'pbclevtug grkgzrpunavp.pbz';
    text = text.replace(/\r\n/g, '\n');
    text = text.split('\n').reverse().clean('').join('\n');
    document.getElementById('input_output').value = text;
}

// String Randomizer
function ranzstr_rsort() {
    return(Math.round(Math.random()) - 0.5);
}

function ranzstr() {
    cache_copy();
    var text = document.getElementById('input_output').value.replace(/\r/gi, '');
    var delim = document.getElementById('ranzdelim').value;
    var textarr = text.split('\n');
    var len = textarr.length;
    var textarrout = new Array();
    for (var x = 0; x < len; x++) {
        textarrout[x] = textarr[x].split(delim).sort(ranzstr_rsort).join(delim);
    }
    textout = textarrout.join('\n');
    document.getElementById('input_output').value = textout;
    line_counter();
}

// Unicode Converter
var unitype = 'num';

function ascii2unicode() {
    cache_copy();
    var text = document.getElementById('input_output').value.replace(/\r/gi, '');
    var skipchars = document.getElementById('skipchars_are').value;
    var delimiterleft = document.getElementById('unidelimiterleft').value;
    var delimiterright = document.getElementById('unidelimiterright').value;
    text = text.split('\n');
    var textlen = text.length;
    var textout = new Array();
    var textlinearr = new Array();
    var textline = '';
    var textlinelen = 0;
    var nlc = '10';
    if (unitype == 'hex')
        nlc = '0a';
    if (document.getElementById('skiponly_off').checked == true) {
        for (var x = 0; x < textlen; x++) {
            textlinearr = new Array();
            textline = text[x];
            textlinelen = textline.length;
            if (textline != '') {
                for (var y = 0; y < textlinelen; y++) {
                    if (unitype == 'num') {
                        textlinearr[y] = delimiterleft + textline.charCodeAt(y) + delimiterright;
                    } else {
                        textlinearr[y] = delimiterleft + textline.charCodeAt(y).toString(16) + delimiterright;
                    }
                    textout[x] = textlinearr.join('');
                }
            } else {
                textout[x] = textline;
            }
        }
        textout = textout.join(delimiterleft + nlc + delimiterright);
    }
    if (document.getElementById('skiponly_skip').checked == true) {
        for (var x = 0; x < textlen; x++) {
            textlinearr = new Array();
            textline = text[x];
            textlinelen = textline.length;
            if (textline != '') {
                for (var y = 0; y < textlinelen; y++) {
                    if (skipchars.indexOf(textline[y]) == -1) {
                        if (unitype == 'num') {
                            textlinearr[y] = delimiterleft + textline.charCodeAt(y) + delimiterright;
                        } else {
                            textlinearr[y] = delimiterleft + textline.charCodeAt(y).toString(16) + delimiterright;
                        }
                    } else {
                        textlinearr[y] = textline[y];
                    }
                    textout[x] = textlinearr.join('');
                }
            } else {
                textout[x] = textline;
            }
        }
        if (document.getElementById('skip_lb').checked == true) {
            textout = textout.join('\n');
        } else {
            textout = textout.join(delimiterleft + nlc + delimiterright);
        }
    }
    if (document.getElementById('skiponly_only').checked == true) {
        for (var x = 0; x < textlen; x++) {
            textlinearr = new Array();
            textline = text[x];
            textlinelen = textline.length;
            if (textline != '') {
                for (var y = 0; y < textlinelen; y++) {
                    if (skipchars.indexOf(textline[y]) != -1) {
                        if (unitype == 'num') {
                            textlinearr[y] = delimiterleft + textline.charCodeAt(y) + delimiterright;
                        } else {
                            textlinearr[y] = delimiterleft + textline.charCodeAt(y).toString(16) + delimiterright;
                        }
                    } else {
                        textlinearr[y] = textline[y];
                    }
                    textout[x] = textlinearr.join('');
                }
            } else {
                textout[x] = textline;
            }
        }
        if (document.getElementById('only_lb').checked == true) {
            textout = textout.join(delimiterleft + nlc + delimiterright);
        } else {
            textout = textout.join('\n');
        }
    }
    document.getElementById('input_output').value = textout;
    line_counter();
}

function unicodetype(whatype) {
    if (whatype == 'num') {
        unitype = 'num';
        delimiterleft = document.getElementById('unidelimiterleft').value = '&#';
        delimiterright = document.getElementById('unidelimiterright').value = ';';
    }
    if (whatype == 'hex') {
        unitype = 'hex';
        delimiterleft = document.getElementById('unidelimiterleft').value = '&#x';
        delimiterright = document.getElementById('unidelimiterright').value = ';';
    }
    if (whatype == 'hex16') {
        unitype = 'hex';
        delimiterleft = document.getElementById('unidelimiterleft').value = '0x00';
        delimiterright = document.getElementById('unidelimiterright').value = '';
    }
    if (whatype == 'num16') {
        unitype = 'num';
        delimiterleft = document.getElementById('unidelimiterleft').value = '';
        delimiterright = document.getElementById('unidelimiterright').value = '';
    }
    if (whatype == 'hexsource') {
        unitype = 'hex';
        delimiterleft = document.getElementById('unidelimiterleft').value = '\\u00';
        delimiterright = document.getElementById('unidelimiterright').value = '';
    }
}

var skiponlyspan_cache = 'skiponly_span1';

function skiponlymode(mode, spanid) {
    document.getElementById(skiponlyspan_cache).style.backgroundColor = '#E1E1D2';
    document.getElementById(spanid).style.backgroundColor = '#FFFF99';
    skiponlyspan_cache = spanid;
    if (mode == 'off')
        document.getElementById('skipchars_are').value = '';
    if (mode == 'skip')
        document.getElementById('skipchars_are').value = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789';
    if (mode == 'only')
        document.getElementById('skipchars_are').value = '"';
}
        