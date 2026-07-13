const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwqyRHhdjFX86o2f2DvxJptxJj7Ot6lX5oywohlLChauQ_DztyAoZgT_S-c_ozY4bnojw/exec"

async function login() {

    const studentId = document.getElementById("studentId").value;
    const password = document.getElementById("password").value;

    const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
            action: "login",
            studentId: studentId,
            password: password
        })
    });

    const data = await response.json();

    if (data.success) {

        document.getElementById("result").innerHTML = `
        <div style="margin-top:20px;padding:20px;background:#f5f5f5;border-radius:10px">
            <h3>Welcome ${data.student.name}</h3>
            <p><b>Student ID:</b> ${data.student.studentId}</p>
            <p><b>Father Name:</b> ${data.student.father}</p>
            <p><b>Course:</b> ${data.student.course}</p>
            <p><b>Mobile:</b> ${data.student.mobile}</p>
            <p><b>Fee Status:</b> ${data.student.fee}</p>
            <p><b>Result:</b> ${data.student.result}</p>
            <p><b>Certificate:</b> ${data.student.certificate}</p>
        </div>`;
    } else {
        alert(data.message);
    }
}
